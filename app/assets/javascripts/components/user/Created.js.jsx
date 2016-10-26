var Created = React.createClass({
  redirect: function(event){
    event.preventDefault();
    window.location = '/users/' + this.props.item.user.id;
  },
  render: function () {
    var item = this.props.item;
    
    return(
      <small className='pull-right text-lowercase'>
        <span className='text-primary' onClick={ this.redirect }>
          <img src={item.user.gravatar} />&nbsp;
          { item.user.email }&nbsp; 
        </span>
        at { item.date }
      </small>
    ) 
    
  }
});