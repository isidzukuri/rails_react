class Question < ApplicationRecord
  include Votable

  has_many :answers, :dependent => :delete_all
  belongs_to :user
  has_many :comments, as: :commentable, :dependent => :delete_all
  has_and_belongs_to_many :tags

  validates_presence_of :title, :content, :user_id
end
