var Comment = React.createClass({
  

  render: function () {
    var item = this.props.item;

    return (
      <div className='well well-sm'>
        <small> { item.content } </small>
        <div className='clearfix'></div>
      </div>
    )
  }
});