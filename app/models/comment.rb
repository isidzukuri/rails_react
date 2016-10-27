class Comment < ApplicationRecord
  include HtmlContent

  belongs_to :user
  belongs_to :commentable, polymorphic: true

  has_many :comments, as: :commentable, dependent: :delete_all

  validates_presence_of :content

end
