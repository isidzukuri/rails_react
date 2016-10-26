var TagsList = React.createClass({
  getInitialState: function () {
    return this.props;
  },
  filterItems: function(filter){
    elements = this.state.items;
    var elements = elements.filter(function ( item ) {
      return item.title.toLowerCase().indexOf(filter) >= 0 ? item : false;
    })
    this.setState({ elements: elements })
    return elements;
  }, 
  componentWillMount: function(){
    this.filterItems('');
  },
  liveFilter: function(event){
    this.setState({ filter: event.target.value })
    this.filterItems(event.target.value);
  },
  submitFilter: function(event){
  },


  render: function () {
    var nodes = this.state.elements.map(function ( item ) {
      return <Tag item={ item } key={ item.id } />
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

        <div> 
          { nodes }
        </div>
      </div>
    )
  }
});