var Comment = React.createClass({
  

  render: function () {
    var item = this.props.item;
    return (
      <div className='comment'>
        <small> { item.content } </small>
        <CommentsBox item={ item } type='comment' form={ this.props.form } />
        <div className='clearfix'></div>
      </div>
    )
  }
});