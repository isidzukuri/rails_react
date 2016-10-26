class Answer < ApplicationRecord
  include Votable

  belongs_to :user
  belongs_to :question

  has_many :comments, as: :commentable, dependent: :delete_all

  validates_presence_of :content, :question_id, :user_id
end
