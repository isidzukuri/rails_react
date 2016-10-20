class Question < ApplicationRecord
  has_many :answers
  belongs_to :user

  validates_presence_of :title, :content, :user_id
end
