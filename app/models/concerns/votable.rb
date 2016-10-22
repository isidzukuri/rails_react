module Votable
  def self.included(base)
    base.instance_eval do
      has_many :votes, as: :votable
    end
  end

  def votes_total
    votes.sum(:value)
  end
end
