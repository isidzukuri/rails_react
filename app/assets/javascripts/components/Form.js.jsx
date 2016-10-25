var Form = React.createClass({
  getInitialState: function () {
    state_hash = { errors: []};
    // additional = state_params();
    // for (var attrname in additional) { state_hash[attrname] = additional[attrname]; }
    return state_hash;
  },

  render: function () {},
  // state_params: function () {return {}},

  handleSubmit: function ( event ) {
    event.preventDefault();
    this.submit()
    this.reset_form();
  },

  reset_form: function(){
    if(this.props.clear_form){
      // this.refs.form.reset(); // doesnt work properly. Why?!!! it disables textarea

      // this.setState( this.getInitialState() ) //doesnt work 2
  
      // additional = this.state_params();
      // for (var attrname in additional) { 
      //   state_hash[attrname] = additional[attrname]; 
      //   if(this.refs[attrname]) this.refs[attrname].value  = '';
      // }

      this.refs.content.value = '';
      if(this.refs.title) this.refs.title.value = '';
    }
  },

  submit: function(){
    var formData = $( this.refs.form ).serialize();
    action = this.refs.form.action.split('?')[0];
    $.ajax({
      data: formData,
      url: action,
      type: 'post',
      dataType: "json",
      success: function ( data ) {
        if(data.errors){
          this.setState( { errors: data.errors } );
        }else if(this.props.afterSend){
          this.setState( { errors: [] } );
          this.props.afterSend(data);
        }
        if(data.redirect){
          window.location = data.redirect;
        }      
      }.bind(this)
    });
  }

});
