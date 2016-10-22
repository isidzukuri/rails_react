class QuestionPresenter
  def self.full(item, user_id = nil)
    struct = item.as_json(include: { answers: {
                          include: {
                            comments: {}
                          }
                        },
                                   user: {},
                                   comments: {} })

    struct['editable'] = user_id == item.id
    struct['votes_total'] = item.votes_total
    struct
  end
end
