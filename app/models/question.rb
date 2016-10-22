class Question < ApplicationRecord
  include Votable

  has_many :answers
  belongs_to :user

  has_many :comments, as: :commentable

  validates_presence_of :title, :content, :user_id
end
