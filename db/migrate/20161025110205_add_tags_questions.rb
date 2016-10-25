class AddTagsQuestions < ActiveRecord::Migration[5.0]
  def change
    create_table :questions_tags do |t|
      t.integer :tag_id
      t.integer :question_id
    end

    add_index :questions_tags, [:question_id, :tag_id]
  end
end
