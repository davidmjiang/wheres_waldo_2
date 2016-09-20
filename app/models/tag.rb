class MyValidator < ActiveModel::Validator
  def validate(record)
    unless ["Waldo", "Wenda", "Odlaw", "Wizard Whitebeard", "Woof"].include?(record.name)
      record.errors[:name] << 'Need a valid name please!'
    end
  end
end


class Tag < ApplicationRecord
  include ActiveModel::Validations
  validates_with MyValidator
end
