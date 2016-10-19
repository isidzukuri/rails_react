class Question < ApplicationRecord
  has_many :answers

  validates_presence_of :title, :content
end
