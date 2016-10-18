var QuestionFull = React.createClass({
  getInitialState: function () {
    return this.props.presenter;
  },

  handleSubmit: function ( formData, action ) {

    alert(1)
    $.ajax({
      data: formData,
      url: action,
      type: this.state.form.method,
      dataType: "json",
      success: function ( data ) {
        // this.setState({ items: data });
      }.bind(this)
    });
  },

  render: function () {
    var item = this.state.item;

    return (
      <div className="question_full">
        <h2>{ item.title }</h2>
        <div>{ item.content }</div>

        <hr />
        <div className='form_wrapper'>
          <h5>Change question:</h5>
          <QuestionForm form={ this.state.form } onSubmit={ this.handleSubmit } />
        </div>
        
      </div>
    );
  }
});