var TextEditor = React.createClass({
  getInitialState: function () {
    return this.props;
  },
  
  componentDidMount: function() {
    $(ReactDOM.findDOMNode(this)).wysihtml5({toolbar: {
      'font-styles': false,
      'emphasis': {
        'small': false,
      },
      'blockquote': false,
      'html': false,
      'image': false,
      'smallmodals': false,
      'code': true
    }})
  },

  render: function () {
    return (
      <textarea className="form-control" name={ this.state.name } defaultValue={ this.state.content_val }></textarea>
    );
  }

});
