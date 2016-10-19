var QuestionForm = React.createClass({
  getInitialState: function () {
    return { errors: []};
  },

  render: function () {
    var form = this.props.form
    var title_val = this.props.item ? this.props.item.title : '';
    var content_val = this.props.item ? this.props.item.content : '';
    var method = form.method || 'post';

    return (
      <form ref="form" className="question-form" action={ form.action } acceptCharset="UTF-8" method='post' onSubmit={ this.handleSubmit }>
        <input type="hidden" name={ form.csrf_param } value={ form.csrf_token } />
        <input type="hidden" name='_method' value={ method } />
        <p ><input ref="title" name="question[title]" defaultValue={ title_val }/></p>
        <p><textarea ref="content" name="question[content]" defaultValue={ content_val } /></p>
        <p><button type="submit">submit</button></p>

        <ValidationErrorsList items={ this.state.errors } />
      </form>
    )
  },

  handleSubmit: function ( event ) {
    event.preventDefault();
    if(this.validate(['title', 'content'])){
      this.submit()
      this.reset_form();
    }
  },

  reset_form: function(){
    if(this.props.clear_form){
      this.refs.form.reset();
    }
  },

  submit: function(){
    var formData = $( this.refs.form ).serialize();
    this.props.onSubmit( formData, this.props.form.action );
  },

  validate: function(fields){
    var errors = [];
    self = this;
    fields.forEach(function(item, i) {
      result = self.any_errors(item);
      if(result) errors.push(result)
    });
    this.setState( { errors: errors } );
    return errors.length ? false : true;
  },

  any_errors: function(key){
    return this.refs[key].value.trim() ? false : {title: key+' not valid'};
  }
});
