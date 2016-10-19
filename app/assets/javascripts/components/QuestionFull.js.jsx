var QuestionFull = React.createClass({
  getInitialState: function () {
    return this.props.presenter;
  },

  showItem: function(data){
    this.setState({ item: data });
    this.toggleForm();
  },

  toggleForm: function(e){
    this.setState( { edit: !this.state.edit } );
  },

  handleDelete() {
    data = {};
    data[this.state.form.csrf_param] = this.state.form.csrf_token;
    $.ajax({ 
      url: '/questions/'+ this.state.item.id, 
      type: 'DELETE', 
      data: data,
      success(response) { 
        if(response) window.location = '/questions';
      } 
    });

  },

  render: function () {
    var item = this.state.item;

    return (
      <div className="question_full">
        <div className={this.state.edit ? 'hidden' : '' }>
          <h2>{ item.title }</h2>
          <div>{ item.content }</div>
        </div>

        <div className={this.state.edit ? '' : 'hidden'}>
          <h5>Change question:</h5>
          <QuestionForm form={ this.state.form } item={ item } afterSend={ this.showItem } />
        </div>
        
        <button onClick={ this.toggleForm }>edit</button>

        <button onClick={this.handleDelete} className='btn btn-default' >delete</button>
       
        
      </div>
    );
  }
});