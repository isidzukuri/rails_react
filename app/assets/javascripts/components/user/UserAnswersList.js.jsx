var UserAnswersList = React.createClass({

  render: function () {
    var nodes = this.props.items.map(function ( item ) {
      return <UserAnswer item={ item } key={ item.id } />
    });

    return (
      <div className="list-group">
        { nodes }
      </div>
    )
  }
});