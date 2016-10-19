var ValidationError = React.createClass({
  render: function () {
    return (
      <div className='alert alert-danger alert-dismissible'>
        <b>{ this.props.title }:</b> { this.props.description }
      </div>
    )
  }
});