class QuestionForm extends Form{

  render() {
    var form = this.props.form
    var title_val = this.props.item ? this.props.item.title : '';
    var content_val = this.props.item ? this.props.item.content : '';
    var method = form.method || 'post';

    return (
      <form ref="form" className="question-form" action={ form.action } acceptCharset="UTF-8" method='post' onSubmit={ this.handleSubmit }>
        <input type="hidden" name={ form.csrf_param } value={ form.csrf_token } />
        <input type="hidden" name='_method' value={ method } />
        <p ><input ref="title" name="question[title]" defaultValue={ title_val }/></p>
        <p><textarea ref="content" name="question[content]" defaultValue={ content_val } /></p>
        <p><button type="submit">submit</button></p>

        <ValidationErrorsList items={ this.state.errors } />
      </form>
    )
  }

 
  
};

