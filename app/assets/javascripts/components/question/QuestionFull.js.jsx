var QuestionFull = React.createClass({
  getInitialState: function () {
    return this.props.presenter;
  },

  showItem: function(data){
    var newState = React.addons.update(this.state, {
      item: {
        content: { $set: data.content },
        title: { $set: data.title }
      }
    });
    this.setState(newState);
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
      <div>
        <div className={this.state.edit ? 'hidden' : '' }>
          <div className="panel panel-default">
            <div className="panel-heading">
              <b>{ item.title }</b>
               {item.editable ? (
                  <div className='pull-right'>
                    <button onClick={ this.toggleForm } className='btn btn-xs btn-warning' >edit</button>
                    <button onClick={this.handleDelete} className='btn btn-xs btn-danger' >delete</button>
                  </div>
                )
              : null}
            </div>
            <div className="panel-body">
              <Votes item={ item } type='question' />
              <div>
                { item.content }
                <small className='pull-right text-lowercase'>{ item.user.email } at { item.date }</small>
              </div>              
            </div>
            
            <div className="panel-footer">
              <CommentsBox item={ item } type='question' form={ this.state.form } />
            </div>
            
          </div>
        </div>

        <div className={this.state.edit ? '' : 'hidden'}>
          <div className="panel panel-default">
            <div className="panel-heading">
              Change question:
              <div className='pull-right'>
                <button onClick={ this.toggleForm } className='btn btn-xs btn-warning' >cancel</button>
                <button onClick={this.handleDelete} className='btn btn-xs btn-danger' >delete</button>
              </div>
            </div>
            <div className="panel-body">
              <QuestionForm form={ this.state.form } item={ item } afterSend={ this.showItem } />
            </div>
          </div>
        </div>
        
        <AnswerBox item={ item } form={ this.state.form } />

      </div>
    );
  }
});