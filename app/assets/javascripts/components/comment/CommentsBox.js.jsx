var CommentsBox = React.createClass({
  getInitialState: function () {
    return this.props;
  },

  toggleForm: function(e){
    this.setState( { show_form: !this.state.show_form } );
  },

  addItem: function(data){
    comments = this.state.item.comments.concat([data]);
    var newState = React.addons.update(this.state, {
      item: {
        comments: { $set: comments }
      }
    });
    this.setState(newState);
  },

  render: function () {
    var item = this.state.item;
    return (
      <div>
        <button onClick={ this.toggleForm } className='btn btn-xs btn-primary' >add comment</button>
        <CommentsList items={ item.comments } />
        <div className={this.state.show_form ? '' : 'hidden'}>
          <CommentForm item_id={ item.id } type={this.state.type} form={ this.state.form } clear_form={ true } afterSend={ this.addItem } />
        </div>
      </div>
    )
  }
});