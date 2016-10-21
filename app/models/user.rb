class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable, :validatable
         # :recoverable, :rememberable, :trackable, 

  has_many :questions
  has_many :answers
  has_many :comments
  has_many :votes
end
