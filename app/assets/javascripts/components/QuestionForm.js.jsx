var QuestionForm = React.createClass({
  handleSubmit: function ( event ) {
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
    return (
      <form ref="form" className="question-form" action={ this.props.form.action } acceptCharset="UTF-8" method="post" onSubmit={ this.handleSubmit }>
        <p><input type="hidden" name={ this.props.form.csrf_param } value={ this.props.form.csrf_token } /></p>
        <p><input ref="title" name="question[title]" /></p>
        <p><textarea ref="content" name="question[content]" /></p>
        <p><button type="submit">submit</button></p>
      </form>
    )
  }
});
