var Question = React.createClass({
  render: function () {
    return (
      <div>
        <h4>{ this.props.title }</h4>
        <p>{ this.props.content }</p>
      </div>
    )
  }
});