var Tag = React.createClass({
  

  render: function () {
    var item = this.props.item;
    var href = '/tags/' + item.id;
    return (
      <a className="label label-info" href={ href }>#{ item.title}</a>
    )
  }
});