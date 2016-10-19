var Answer = React.createClass({
  markHelpfull: function(){
    $.ajax({
      data: {id: this.props.item.id },
      url: '/answers/helpfull',
      type: 'get',
      dataType: "json",
      success: function ( data ) {
        if(data.errors){
          console.log('errors ');
        }else{
          console.log(data);
          this.props.markHandler(data);
        }        
      }.bind(this)
    });
  },

  render: function () {
    var item = this.props.item;
    class_str = 'list-group-item';
    if(this.props.helpfull) class_str += ' list-group-item-success';

    return (
      <div className={ class_str }>
        <p> { item.content } </p>
        <small className='pull-right'>{ item.created_at }</small>
        <div className={this.props.helpfull ? 'hidden' : ''}>
          <button className='pull-left btn btn-xs btn-success' onClick={ this.markHelpfull } >mark as helpfull</button>
        </div>
        <div className='clearfix'></div>
      </div>
    )
  }
});