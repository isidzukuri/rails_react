var Question = React.createClass({
  render: function () {
    return (
      <div>
        <a href='{ this.props.form.action } '>{ this.props.title }</a>
      </div>
    )
  }
});