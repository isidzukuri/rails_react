class AnswerPresenter
  def self.full(item, user_id = nil)
    struct = item.as_json(include: [:comments, :user])
    struct['editable'] = user_id == item.user_id
    struct['votes_total'] = item.votes_total
    struct['date'] = item.created_at.strftime('%H:%M %d.%m.%Y')
    struct['user']['gravatar'] = item.user.gravatar
    struct
  end
end
