require_relative 'db_connection'
require 'active_support/inflector'
# NB: the attr_accessor we wrote in phase 0 is NOT used in the rest
# of this project. It was only a warm up.

class SQLObject
  
  def self.columns
    @columns ||= DBConnection.execute2(<<-SQL)
      SELECT * 
      FROM #{self.table_name}
    SQL
    .first
    .map(&:to_sym)
  end

  def self.finalize!
    self.columns.each do |column|

      define_method(column) do 
        self.attributes[column]
      end

      setter = "#{column}=".to_sym  
      define_method(setter) { |val| self.attributes[column] = val }

    end
  end

  def self.table_name=(table_name)
    @table_name = table_name.tableize
  end

  def self.table_name
    @table_name = 'humans' if self.name == 'Human'
    @table_name || self.name.to_s.tableize
  end

  def self.all
    results = DBConnection.execute(<<-SQL)
      SELECT * 
      FROM #{self.table_name}
    SQL
    self.parse_all(results)
  end

  def self.parse_all(results)
    results.map { |obj_hsh| self.new(obj_hsh) }
  end

  def self.find(id)
    results = DBConnection.execute(<<-SQL)
      SELECT * 
      FROM #{self.table_name}
      WHERE #{self.table_name}.id = #{id}
    SQL
    self.parse_all(results).first
  end

  def initialize(params = {})

    params.each do |attr_name, attr_value|
      raise "unknown attribute '#{attr_name}'" unless self.class.columns.include?(attr_name.to_sym)
      self.send("#{attr_name}=".to_sym, attr_value)
    end
  end

  def attributes
    @attributes ||= {}
  end

  def attribute_values
    @attributes.values
  end

  def insert
      c = self.class.columns.drop(1).join","
      n = self.class.columns.length - 1
      v = (['?'] * n).join','
    DBConnection.execute(<<-SQL,*self.attribute_values)
      INSERT INTO
        #{self.class.table_name} (#{c})
      VALUES
        (#{v})
    SQL

    self.attributes[:id] = DBConnection.last_insert_row_id

  end

  def update
    a_v = self.attribute_values.rotate
    cols = self.class.columns.drop(1).map { |attr_name|"#{attr_name} = ?"  }.join", "
    DBConnection.execute(<<-SQL, *a_v)
      UPDATE
        #{self.class.table_name}
      SET
        #{ cols }
      WHERE
       id = ?
    SQL
  end

  def save
    if self.attributes[:id].nil?
      self.insert
      return true
    else
      self.update
      return true
    end
    false
  end

  # finalize!
end

# comment for credit