class Vote < ApplicationRecord
  
  belongs_to :user
  belongs_to :votable, polymorphic: true

  validates :value, inclusion: [1,-1]
  validates_presence_of :value
  validates_presence_of :user_id
  validates_uniqueness_of :user_id, :scope => [:votable_type, :votable_id]
end