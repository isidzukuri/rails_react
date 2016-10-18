var QuestionsBox = React.createClass({
  getInitialState: function () {
    return JSON.parse(this.props.presenter);
  },

  render: function () {
    return (
      <div className="quesrtions-box">
        <QuestionsList items={ this.state.items } />
        <hr />
        <h2>Add a question:</h2>
      </div>
    );
  }
});