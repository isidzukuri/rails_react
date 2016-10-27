var Tag = React.createClass({
  

  render: function () {
    var item = this.props.item;
    var href = '/tags/' + item.id;
    var classes = 'tag btn btn-info'
    if(this.props.size) classes += ' btn-' + this.props.size;
    return (
      <a className={classes} href={ href }>#{ item.title}</a>
    )
  }
});