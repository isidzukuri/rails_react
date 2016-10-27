class CommentForm extends Form{

  render() {
    var form = this.props.form
    var content_val = '';
    var method = 'post';

    return (
      <form ref="form" action={ '/comments' } acceptCharset="UTF-8" method='post' onSubmit={ this.handleSubmit }>
        <input type="hidden" name={ form.csrf_param } value={ form.csrf_token } />
        <input type="hidden" name='_method' value={ method } />
        
        <input type="hidden" name="type" defaultValue={ this.props.type }/>
        <input type="hidden" name="item_id" defaultValue={ this.props.item_id }/>

        <div className="form-group">
          <label>Comment:</label>
          <AllovedTags />

          <textarea ref="content" className="form-control" name="content" defaultValue={ content_val } />
        </div>
        <button type="submit" className='btn btn-primary'>submit</button>
        <ValidationErrorsList items={ this.state.errors } />
      </form>
    )
  }
};

// <TextEditor content_val={ content_val } name="content" />
         // 