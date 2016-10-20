var ValidationErrorsList = React.createClass({

  render: function () {
    var nodes = this.props.items.map(function ( item, i ) {
      return <ValidationError title={ item[0] } description={ item[1].join('. ') } key={i} />
    });

    return (
      <div className="errors-list">
        { nodes }
      </div>
    )
  }
});