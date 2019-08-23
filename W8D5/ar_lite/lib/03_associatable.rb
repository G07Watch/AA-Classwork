require_relative '02_searchable'
require 'active_support/inflector'

# Phase IIIa
class AssocOptions
  attr_accessor(
    :foreign_key,
    :class_name,
    :primary_key
  )

  def model_class
    self.class_name.to_s.constantize
  end

  def table_name
    self.model_class.table_name
  end
end

class BelongsToOptions < AssocOptions
  def initialize(name, options = {})
    @class_name = options[:class_name] || name.to_s.camelcase
    @foreign_key = options[:foreign_key] || (name.to_s + '_id').to_sym
    @primary_key = options[:primary_key] || :id
  end
end

class HasManyOptions < AssocOptions
  def initialize(name, self_class_name, options = {})
    # name => :humans
    # self.class.name => 'Human'
    @class_name = options[:class_name] || name.to_s.camelcase.singularize
    @foreign_key = options[:foreign_key] || (self_class_name.to_s.downcase + '_id').to_sym
    @primary_key = options[:primary_key] || :id
  end
end

module Associatable
  # Phase IIIb
  def belongs_to(name, options = {})
    options = BelongsToOptions.new(name, options)

    assoc_options[name] = options

    define_method(name) do
      fkey = options.send(:foreign_key)
      mclass = options.send(:model_class)
      pkey = options.send(:primary_key)
      fkey_value = self.send(fkey)
      mclass.where(pkey => fkey_value).first
    end

  end

  def has_many(name, options = {})
    options = HasManyOptions.new(name, self.name, options)
                                
    define_method(name) do
      fkey = options.send(:foreign_key)
      mclass = options.send(:model_class)
      pkey = options.send(:primary_key)
      pkey_value = self.send(pkey)
      mclass.where(fkey => pkey_value)
    end
  end

  def assoc_options
      @assoc_options ||= {}
  end
end

class SQLObject
  extend Associatable
  # Mixin Associatable here...
end
