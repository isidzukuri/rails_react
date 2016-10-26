var CommentsList = React.createClass({
  
  render: function () {
    var nodes = this.props.items.map(function ( item ) {
      return <Comment item={ item } key={ item.id } />
    });

    return (
      <div> 
        { nodes }
      </div>
    )
  }
});