class QuestionPresenter

  def self.json_object item
    item.as_json(include: :answers)
  end
  
end