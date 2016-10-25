var QuestionsBox = React.createClass({
  getInitialState: function () {
    return this.props;
  },

  updateList: function ( data ) {
    this.setState({ items: this.state.items.concat([data]) })
  },

  render: function () {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">Questions</div>
        <div className="panel-body">
          <QuestionsList items={ this.state.items } />
          <hr />
          <a href="/questions/new" className='btn btn-primary'>Add question</a>
        </div>
      </div>

    );
  }
});

