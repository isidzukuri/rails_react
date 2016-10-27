class AnswerPresenter
  def self.full(item, user_id = nil)
    struct = item.as_json(include: :user)
    struct['editable'] = user_id == item.user_id
    struct['votes_total'] = item.votes_total
    struct['date'] = item.created_at.strftime('%H:%M %d.%m.%Y')
    struct['user']['gravatar'] = item.user.gravatar
    struct['comments'] = item.comments.map { |comment| CommentPresenter.with_sub(comment) }
    struct
  end

  def self.for_user_list(item)
    struct = item.as_json(include: :question)
    struct['votes_total'] = item.votes_total
    struct['content'] = string_preview(struct['content'])
    struct['is_correct'] = struct['id'] == struct['question']['answer_id']
    struct
  end

  def self.string_preview(str, len = 80)
    if str.length > len
      str = str.truncate(len, separator: ' ')
      str = "#{str}..." unless str.include?('...')
    end
    str
  end
end
