var Created = React.createClass({
  render: function () {
    var item = this.props.item;
    return(
      <small className='pull-right text-lowercase'>
        <img src={item.user.gravatar} /> 
        { item.user.email } at { item.date }
      </small>
    ) 
    
  }
});