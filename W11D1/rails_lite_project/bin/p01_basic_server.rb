require 'rack'
require 'byebug'

 app = Proc.new do |env|
    # debugger
  req = Rack::Request.new(env)
  res = Rack::Response.new
  res['Content-Type'] = 'text/html'
  res.write(req.path)
  res.finish
end

# [status.to_i, header, []]

Rack::Server.start(
  app: app,
  Port: 3000
)