var QuestionsList = React.createClass({

  render: function () {
    var nodes = this.props.items.map(function ( item ) {
      return <Question title={ item.title } content={ item.content } key={ item.id } />
    });

    return (
      <div className="questions-list">
        { nodes }
      </div>
    )
  }
});