var Votes = React.createClass({
  getInitialState: function () {
    return this.props;
  },

  plus: function(event){
    event.preventDefault();
    this.vote(1);    
  },
  minus: function(event){
    event.preventDefault();
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
    var color = item.votes_total < 0 ? 'text-danger' : '';
    return (
      <div className='col-sm-1'>
        <div className="badge">
          <b onClick={ this.plus }>+</b><br/>
          <span className={ color }>{ item.votes_total}</span><br/>
          <b onClick={ this.minus }>-</b><br/>
        </div>
      </div>
    )
  }
});