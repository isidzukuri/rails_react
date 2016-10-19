var QuestionsBox = React.createClass({
  getInitialState: function () {
    return this.props.presenter;
  },

  updateList: function ( data ) {
    this.setState({ items: this.state.items.concat([data]) })
  },

  render: function () {
    return (
      <div className="quesrtions-box">
        <QuestionsList items={ this.state.items } />
        <hr />
        <h2>Add a question:</h2>
        <QuestionForm form={ this.state.form } afterSend={ this.updateList } clear_form={ true } />
      </div>
    );
  }
});