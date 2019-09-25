require_relative '03_associatable'

# Phase IV
module Associatable
  # Remember to go back to 04_associatable to write ::assoc_options

  def has_one_through(name, through_name, source_name)

    define_method(name) do
      # self => Cat               which has one human which has one house
      # cat has owner_id, human has house_id
      through_options = self.class.assoc_options[through_name] #class? = Cat
      # foreign_key: owner_id
      # primary_key: humans.id
      # model_class: Human

      through_class = through_options.model_class  #Human
      source_options = through_class.assoc_options[source_name] # => belongs to option
      # foreign_key: house_id
      # primary_key: houses.id
      # model_class: House

      results = DBConnection.execute(<<-SQL)
        SELECT
          #{source_options.model_class.table_name}.* --houses.*
        FROM
          #{self.class.table_name} --cats
        JOIN
          #{through_class.table_name} 
            ON #{through_options.foreign_key} = #{through_class.table_name}.#{through_options.primary_key} 
            -- humans ON cats.owner_id = humans.id
        JOIN
          #{source_options.model_class.table_name} 
            ON #{through_class.table_name}.#{source_options.foreign_key} = #{source_options.model_class.table_name}.#{source_options.primary_key}
            --houses ON humans.house_id = houses.id
        WHERE
          #{self.class.table_name}.id = #{self.id}
         -- cats.id = #{self.id}
      SQL

      source_options.model_class.parse_all(results).first
    end

  end
end