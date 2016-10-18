var QuestionForm = React.createClass({
  handleSubmit: function ( event ) {

    alert(1)
    event.preventDefault();

    var title = this.refs.title.getDOMNode().value.trim();
    var content = this.refs.content.getDOMNode().value.trim();

    // validate
    if (!content || !title) {
      return false;
    }

    // submit
    var formData = $( this.refs.form.getDOMNode() ).serialize();
    this.props.onSubmit( formData, this.props.form.action );

    // reset form
    this.refs.title.getDOMNode().value = "";
    this.refs.content.getDOMNode().value = "";


  },
  render: function () {
    var form = this.props.form
    var title_val = form.title || '';
    var content_val = form.content || '';
    var method = form.method || 'post';


    return (
      <form ref="form" className="question-form" action={ form.action } acceptCharset="UTF-8" method={ method } onSubmit={ this.handleSubmit }>
        <p><input type="hidden" name={ form.csrf_param } value={ form.csrf_token } /></p>
        <p><input ref="title" name="question[title]" defaultValue={ title_val }/></p>
        <p><textarea ref="content" name="question[content]" defaultValue={ content_val } /></p>
        <p><button type="submit">submit</button></p>
      </form>
    )
  }
});
