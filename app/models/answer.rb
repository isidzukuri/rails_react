class Answer < ApplicationRecord
  belongs_to :user
  belongs_to :question

  has_many :comments, :as => :commentable
  has_many :votes,    :as => :votable

  validates_presence_of :content, :question_id, :user_id
end
