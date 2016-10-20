var QuestionsList = React.createClass({

  render: function () {
    var nodes = this.props.items.map(function ( item ) {
      return <Question title={ item.title } content={ item.content } bd_id={ item.id } key={ item.id } />
    });

    return (
      <div className="list-group">
        { nodes }
      </div>
    )
  }
});