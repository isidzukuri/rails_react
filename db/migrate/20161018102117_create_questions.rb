class CreateQuestions < ActiveRecord::Migration[5.0]
  def change
    create_table :questions do |t|
      t.string   :title, :null => false
      t.text     :content, :null => false
      t.integer  :user_id
      t.datetime :created_at, :null => false
      t.datetime :updated_at, :null => false
    end
  end
end
