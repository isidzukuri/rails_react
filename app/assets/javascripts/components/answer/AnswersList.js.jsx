var AnswersList = React.createClass({

  render: function () {
    var nodes = this.props.items.map(function ( item ) {
      return <Answer content={ item.content } created_at={ item.created_at } key={ item.id } />
    });

    return (
      <div className="list-group">
        { nodes }
      </div>
    )
  }
});