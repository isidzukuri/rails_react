class Tag < ApplicationRecord
  has_and_belongs_to_many :questions

  validates_presence_of :title
  validates_uniqueness_of :title
end
