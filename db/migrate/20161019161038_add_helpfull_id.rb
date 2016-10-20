class AddHelpfullId < ActiveRecord::Migration[5.0]
  def self.up
    add_column :questions, :answer_id, :integer
  end

  def self.down
    remove_column :questions, :answer_id
  end
end
