var Form = React.createClass({
  getInitialState: function () {
    return { errors: []};
  },

  render: function () {},

  handleSubmit: function ( event ) {
    event.preventDefault();
    this.submit()
    this.reset_form();
  },

  reset_form: function(){
    if(this.props.clear_form){
      this.refs.form.reset();
    }
  },

  submit: function(){
    var formData = $( this.refs.form ).serialize();
    $.ajax({
      data: formData,
      url: this.props.form.action,
      type: 'post',
      dataType: "json",
      success: function ( data ) {
        if(data.errors){
          this.setState( { errors: data.errors } );
        }else{
          this.props.afterSend(data);
        }        
      }.bind(this)
    });

  }

});
