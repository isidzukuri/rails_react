class AnswerPresenter
  def self.full(item, user_id = nil)
    struct = item.as_json(include: :comments)
    # item['editable'] = user_id == item['user']['id']
    struct['editable'] = user_id == item.user_id
    struct['votes_total'] = item.votes_total
    struct
  end
end
