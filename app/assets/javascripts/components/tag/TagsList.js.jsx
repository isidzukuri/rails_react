var TagsList = React.createClass({
  
  render: function () {
    var nodes = this.props.items.map(function ( item ) {
      return <Tag item={ item } key={ item.id } size='xs' />
    });

    return (
      <div> 
        { nodes }
      </div>
    )
  }
});