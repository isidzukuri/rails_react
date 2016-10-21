class AnswerPresenter

  def self.full(item, user_id = nil)
    item = item.as_json(include: :comments)
    # item['editable'] = user_id == item['user']['id']
    item
  end

end
