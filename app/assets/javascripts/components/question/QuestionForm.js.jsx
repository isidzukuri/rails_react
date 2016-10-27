class QuestionForm extends Form{

  render() {
    var form = this.props.form
    var title_val = this.props.item ? this.props.item.title : '';
    var content_val = this.props.item ? this.props.item.content : '';
    var tags_val = this.props.item ? this.props.item.tags_string : '';
    var method = form.method || 'post';

    return (
      <form ref="form" action={ form.action } acceptCharset="UTF-8" method='post' onSubmit={ this.handleSubmit }>
        <input type="hidden" name={ form.csrf_param } value={ form.csrf_token } />
        <input type="hidden" name='_method' value={ method } />
        <div className="form-group">
          <label>Title</label>
          <input ref="title" className="form-control" name="question[title]" defaultValue={ title_val }/>
        </div>
        <div className="form-group">
          <label>Content</label>
         <textarea ref="content" className="form-control" name="question[content]" defaultValue={ content_val } />
        </div>

        <div className="form-group">
          <label>Tags</label>
          <p className="text-muted app-muted">* Delimit tags by space. Combine multiple words into single-words with dashes</p>
          <input ref="title" className="form-control" name="question[tags]" defaultValue={ tags_val }/>
        </div>

        <button type="submit" className='btn btn-primary'>submit</button>
        <ValidationErrorsList items={ this.state.errors } />
      </form>
    )
  }

 
  
};

