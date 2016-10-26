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
          this.props.markHandler(data);
        }        
      }.bind(this)
    });
  },

  render: function () {
    var item = this.props.item;
    var class_str = 'list-group-item';
    if(this.props.helpfull) class_str += ' list-group-item-success';
    var show_button = this.props.editable && !this.props.helpfull;

    return (
      <div className={ class_str }>
        <Votes item={ item } type='answer' />
        <p> { item.content } </p>
        <Created item={ item } />
        <div className={show_button ? '' : 'hidden'}>
          <button className='pull-left btn btn-xs btn-success' onClick={ this.markHelpfull } >mark as helpfull</button>
        </div>
        <CommentsBox item={ item } type='answer' form={ this.props.form } />
        <div className='clearfix'></div>
      </div>
    )
  }
});