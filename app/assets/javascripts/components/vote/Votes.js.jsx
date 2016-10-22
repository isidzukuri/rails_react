var Votes = React.createClass({
  getInitialState: function () {
    return this.props;
  },

  plus: function(){
    this.vote(1);    
  },
  minus: function(){
    this.vote(-1);    
  },

  updateVotes: function(data){
    var newState = React.addons.update(this.state, {
      item: {
        votes_total: { $set: data }
      }
    });
    this.setState(newState);
  },

  vote: function(value){
    $.ajax({
      data: {
        item_id: this.state.item.id,
        vote: value,
        type: this.state.type
      },
      url: '/vote',
      type: 'get',
      dataType: "json",
      success: function ( data ) {
        if(data.errors){
          console.log(data.errors);
        }else{
          this.updateVotes(data);
        }        
      }.bind(this)
    });
  },

  render: function () {
    var item = this.state.item;
    return (
      <div className='col-sm-1'>
        <div className="badge">
          <b onClick={ this.plus }>+</b><br/>
          { item.votes_total}<br/>
          <b onClick={ this.minus }>-</b><br/>
        </div>
      </div>
    )
  }
});