var ValidationError = React.createClass({
  render: function () {
    return (
      <div className='alert alert-danger alert-dismissible'>
        { this.props.title }
      </div>
    )
  }
});