class QuestionPresenter
  # def self.json_object(item, user_id = nil)
  #   item = item.as_json(include: [:answers, :user])
  #   item['editable'] = user_id == item['user']['id']
  #   item
  # end

  def self.full(item, user_id = nil)
    item = item.as_json(include: [:answers, :user])
    item['editable'] = user_id == item['user']['id']
    item
  end

end
