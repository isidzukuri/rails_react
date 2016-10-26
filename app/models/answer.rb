class Answer < ApplicationRecord
  include Votable

  belongs_to :user
  belongs_to :question

  has_many :comments, as: :commentable

  validates_presence_of :content, :question_id, :user_id
end
