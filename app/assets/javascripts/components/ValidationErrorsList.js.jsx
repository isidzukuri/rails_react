var ValidationErrorsList = React.createClass({

  render: function () {
    var nodes = this.props.items.map(function ( item, i ) {
      console.log(i)
      return <ValidationError title={ item.title } key={i} />
    });

    return (
      <div className="errors-list">
        { nodes }
      </div>
    )
  }
});