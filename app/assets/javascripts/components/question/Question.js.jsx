var Question = React.createClass({
  render: function () {
    var href = '/questions/' + this.props.bd_id;
    return (
      <div>
        <a href={ href }>{ this.props.title }</a>
      </div>
    )
  }
});