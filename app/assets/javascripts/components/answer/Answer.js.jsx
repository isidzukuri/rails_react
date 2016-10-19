var Answer = React.createClass({
  render: function () {
    return (
      <div className='list-group-item'>
        <p> { this.props.content } </p>
        <small className='pull-right'>{ this.props.created_at }</small>
        <div className='pull-left'>
          <button className='btn btn-xs btn-success' >mark as helpfull</button>
        </div>
        <div className='clearfix'></div>
      </div>
    )
  }
});