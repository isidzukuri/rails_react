var TagsList = React.createClass({
  
  render: function () {
    var nodes = this.props.items.map(function ( item ) {
      return <Tag item={ item } key={ item.id } />
    });

    return (
      <div> 
        { nodes }
      </div>
    )
  }
});