var CommentsList = React.createClass({
  
  render: function () {
    var form = this.props.form;
    var nodes = this.props.items.map(function ( item ) {
      return <Comment item={ item } key={ item.id } form={ form } />
    });

    return (
      <div> 
        { nodes }
      </div>
    )
  }
});