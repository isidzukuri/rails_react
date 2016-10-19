var QuestionFull = React.createClass({
  getInitialState: function () {
    console.log(this.props.presenter)
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

  addAnswer: function(data){
    // this.setState({item:{ answers: this.state.item.answers.concat([data]) }})
    answers = this.state.item.answers.concat([data]);
    var newState = React.addons.update(this.state, {
      item: {
        answers: { $set: answers }
      }
    });
    this.setState(newState);
  },

  markHelpfull: function(data){
    this.setState( { item: data} );
  },

  render: function () {
    var item = this.state.item;

    return (
      <div>
        <div className={this.state.edit ? 'hidden' : '' }>
          
          <div className="panel panel-default">
            <div className="panel-heading">
              <b>{ item.title }</b>
              <div className='pull-right'>
                <button onClick={ this.toggleForm } className='btn btn-xs btn-warning' >edit</button>
                <button onClick={this.handleDelete} className='btn btn-xs btn-danger' >delete</button>
              </div>
            </div>
            <div className="panel-body">
              { item.content }
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
        
        <div className='panel panel-info'>
          <div className="panel-heading">
            answers:
          </div>
          <div className="panel-body">
            <AnswersList items={ item.answers } markHandler={ this.markHelpfull } helpfull_id={ item.answer_id }  />
            <hr/>
            <AnswerForm question_id={ item.id } form={ this.state.form } clear_form={ true } afterSend={ this.addAnswer } />
          </div>
        </div>

      </div>
    );
  }
});