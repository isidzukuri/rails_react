var QuestionsBox = React.createClass({
  getInitialState: function () {
    return this.props.presenter;
  },

  handleSubmit: function ( formData, action ) {
    $.ajax({
      data: formData,
      url: action,
      type: "POST",
      dataType: "json",
      success: function ( data ) {
        this.setState({ items: data });
      }.bind(this)
    });
  },

  render: function () {
    return (
      <div className="quesrtions-box">
        <QuestionsList items={ this.state.items } />
        <hr />
        <h2>Add a question:</h2>
        <QuestionForm form={ this.state.form } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
});