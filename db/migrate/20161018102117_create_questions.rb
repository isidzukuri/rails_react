class CreateQuestions < ActiveRecord::Migration[5.0]
  def change
    create_table :questions do |t|
      t.string   :title, :null => false
      t.text     :content, :null => false
      t.integer  :user_id
      t.timestamps
    end
  end
end
