var QuestionFull = React.createClass({
  getInitialState: function () {
    return this.props.presenter;
  },

  handleSubmit: function ( formData, action ) {
    $.ajax({
      data: formData,
      url: action,
      type: 'post',
      dataType: "json",
      success: function ( data ) {
        this.setState({ item: data });
        this.toggleForm();
      }.bind(this)
    });
  },

  toggleForm: function(e){
    this.setState( { edit: !this.state.edit } );
    console.log(this.state.edit)
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
          <QuestionForm form={ this.state.form } onSubmit={ this.handleSubmit } />
        </div>
        
        <button onClick={ this.toggleForm }>edit</button>
        
        
      </div>
    );
  }
});