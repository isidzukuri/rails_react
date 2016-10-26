var AnswersList = React.createClass({

  render: function () {
    var mark_handler = this.props.markHandler;
    var helpfull_id = this.props.helpfull_id;
    var editable = this.props.editable;
    var form = this.props.form;

    var nodes = this.props.items.map(function ( item ) {
      var helpfull = item.id == helpfull_id;
      return <Answer item={ item } key={ item.id } markHandler={ mark_handler } helpfull={ helpfull } editable={ editable } form={ form } />
    });

    return (
      <div className="list-group">
        { nodes }
      </div>
    )
  }
});