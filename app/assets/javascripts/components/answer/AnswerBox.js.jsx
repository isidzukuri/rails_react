var AnswerBox = React.createClass({
  getInitialState: function () {
    return this.props;
  },

  toggleForm: function(e){
    this.setState( { show_form: !this.state.show_form } );
  },

  addItem: function(data){
    answers = this.state.item.answers.concat([data]);
    this.updateState('answers', answers);
  },

  markHelpfull: function(data){
    this.updateState('answer_id', data);
  },

  updateState: function(key, val){
    update_item = { item: {}};
    update_item['item'][key] = { $set: val };
    newState = React.addons.update(this.state, update_item);
    this.setState(newState);
  },

  render: function () {
    var item = this.state.item;
    return (
      <div className='panel panel-info'>
        <div className="panel-heading">
          answers:
        </div>
        <div className="panel-body">
          <AnswersList items={ item.answers } markHandler={ this.markHelpfull } helpfull_id={ item.answer_id } editable={ item.editable } form={ this.state.form } />
          <hr/>
          <AnswerForm question_id={ item.id } form={ this.state.form } clear_form={ true } afterSend={ this.addItem } />
        </div>
      </div>
    )
  }
});