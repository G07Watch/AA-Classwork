require 'active_support'
require 'active_support/core_ext'
require 'erb'
require_relative './session'
require 'flash'
require 'byebug'

class ControllerBase
  attr_reader :req, :res, :params, :session

  # Setup the controller
  def initialize(req, res, params = {})
    @req = req
    @res = res
    @params = params.merge(req.params)
    @flash = Flash.new(req)
  end

  # Helper method to alias @already_built_response
  def already_built_response?
    @already_built_response
  end

  # Set the response status code and header
  def redirect_to(url)
    raise "double render error" if already_built_response?
    
    res.status = 302
    res.location = url

    if @flash[:persist]
      flash.now # persist false
      flash.store_session(res)
    else
      res.delete_cookie[:flash]
    end

    session.store_session(res)
    flash.store_session(res)
    @already_built_response = true
  end

  #1 res.set_cookie
    # => :flash = { errors: [], persist: true }
  #2 req.cookies[:flash]
    # => { errors: [], persist: true }
  #3 res.delete_cookie[:flash]


  # Populate the response with content.
  # Set the response's content type to the given type.
  # Raise an error if the developer tries to double render.
  def render_content(content, content_type)
    raise "double render error" if already_built_response?

    res['Content-Type'] = content_type
    res.write(content)
    session.store_session(res)
    res.set_cookie(:flash, @flash.eject)

    @already_built_response = true
  end

  # use ERB and binding to evaluate templates
  # pass the rendered html to render_content
  def render(template_name)
    controller_name = self.class.name.underscore
    dir_path = File.dirname(__FILE__)

    file_path = File.join(dir_path, "..", 'views', controller_name, "#{template_name}.html.erb")
    file_content = File.read(file_path)

    template = ERB.new(file_content)
    render_content(template.result(binding), 'text/html')
  end

  # method exposing a `Session` object
  def session
    @session ||= Session.new(req)
  end

  # use this with the router to call action_name (:index, :show, :create...)
  def invoke_action(name)
    send(name)
    unless @already_built_response
      render (name)
    end
  end

  def flash
    @flash
  end

end
