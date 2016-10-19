class AnswerForm extends Form{

  render() {
    var form = this.props.form
    var content_val = '';
    var method = 'post';

    return (
      <form ref="form" action={ '/answers' } acceptCharset="UTF-8" method='post' onSubmit={ this.handleSubmit }>
        <input type="hidden" name={ form.csrf_param } value={ form.csrf_token } />
        <input type="hidden" name='_method' value={ method } />
        <input type="hidden" name="answer[question_id]" defaultValue={ this.props.question_id }/>
        <div className="form-group">
          <label for="content">Answer:</label>
         <textarea ref="content" className="form-control" name="answer[content]" defaultValue={ content_val } />
        </div>
        <button type="submit" className='btn btn-primary'>submit</button>
        <ValidationErrorsList items={ this.state.errors } />
      </form>
    )
  }

 
  
};

