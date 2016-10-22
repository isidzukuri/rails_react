class Question < ApplicationRecord
  has_many :answers
  belongs_to :user

  has_many :comments, as: :commentable
  has_many :votes,    as: :votable

  validates_presence_of :title, :content, :user_id

  def votes_total
    votes.sum(:value)
  end
end
