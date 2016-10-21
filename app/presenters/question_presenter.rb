class QuestionPresenter
  def self.full(item, user_id = nil)
    # item = item.as_json(include: [:answers, :user, :comments])
    item = item.as_json(include: { answers: {
                          include: {
                            comments: {}
                          }
                        },
                                   user: {},
                                   comments: {} })

    item['editable'] = user_id == item['user']['id']
    item
  end
end
