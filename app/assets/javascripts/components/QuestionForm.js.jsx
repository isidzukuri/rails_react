var QuestionForm = React.createClass({
  handleSubmit: function ( event ) {
    event.preventDefault();
    var title = this.refs.title.value.trim();
    var content = this.refs.content.value.trim();

    // validate
    if (!content || !title) {
      console.log('form not valid');
      return false;
    }

    // submit
    var formData = $( this.refs.form ).serialize();
    this.props.onSubmit( formData, this.props.form.action );

    // reset form
    this.refs.title.value = "";
    this.refs.content.value = "";
  },

  render: function () {
    var form = this.props.form
    var title_val = form.title || '';
    var content_val = form.content || '';
    var method = form.method || 'post';


    return (
      <form ref="form" className="question-form" action={ form.action } acceptCharset="UTF-8" method='post' onSubmit={ this.handleSubmit }>
        <input type="hidden" name={ form.csrf_param } value={ form.csrf_token } />
        <input type="hidden" name='_method' value={ method } />
        <p ><input ref="title" name="question[title]" defaultValue={ title_val }/></p>
        <p><textarea ref="content" name="question[content]" defaultValue={ content_val } /></p>
        <p><button type="submit">submit</button></p>
      </form>
    )
  }
});
