var QuestionsList = React.createClass({
  getInitialState: function () {
    return this.props;
  },
  filterItems: function(filter){
    elements = this.state.items;
    var elements = elements.filter(function ( item ) {
      return item.title.toLowerCase().includes(filter) ? item : false;
    })
    this.setState({ elements: elements })
    return elements;
  }, 
  componentWillMount: function(){
    this.filterItems('')
  },
  liveFilter: function(event){
    this.setState({ filter: event.target.value })
    this.filterItems(event.target.value);
  },
  submitFilter: function(event){
    filter = this.state.filter;
    if(filter) window.location = '?filter=' + filter;
  },

  render: function () {
    var nodes = this.state.elements.map(function ( item ) {
      return <Question title={ item.title } content={ item.content } bd_id={ item.id } key={ item.id } />
    });

    return (
      <div>
        <div className="input-group">
          <input type="text" className="form-control" onChange={ this.liveFilter } />
          <span className="input-group-btn">
            <button className="btn btn-primary" type="button" onClick={ this.submitFilter }>Search</button>
          </span>
        </div>
        <br/>

        <div className="list-group">
          { nodes }
        </div>
      </div>
    )
  }
});