class QuestionForm extends Form{

  render() {
    var form = this.props.form
    var title_val = this.props.item ? this.props.item.title : '';
    var content_val = this.props.item ? this.props.item.content : '';
    var method = form.method || 'post';

    return (
      <form ref="form" action={ form.action } acceptCharset="UTF-8" method='post' onSubmit={ this.handleSubmit }>
        <input type="hidden" name={ form.csrf_param } value={ form.csrf_token } />
        <input type="hidden" name='_method' value={ method } />
        <div className="form-group">
          <label for="title">Title</label>
          <input ref="title" className="form-control" name="question[title]" defaultValue={ title_val }/>
        </div>
        <div className="form-group">
          <label for="content">Content</label>
         <textarea ref="content" className="form-control" name="question[content]" defaultValue={ content_val } />
        </div>
        <button type="submit" className='btn btn-primary'>submit</button>
        <ValidationErrorsList items={ this.state.errors } />
      </form>
    )
  }

 
  
};

