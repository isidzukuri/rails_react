var Question = React.createClass({
  render: function () {
    var href = '/questions/' + this.props.bd_id;
    return <a className='list-group-item' href={ href }>{ this.props.title }</a>
  }
});