var QuestionsList = React.createClass({
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
    this.setState({ sort_by: 'timestamp', order_desc: false });
    this.filterItems('');
  },
  liveFilter: function(event){
    this.setState({ filter: event.target.value })
    this.filterItems(event.target.value);
  },
  submitFilter: function(event){
    filter = this.state.filter;
    if(filter) window.location = '?filter=' + filter;
  },
  sort_by: function(field, reverse, func){
    var key = func ? function(x) {return func(x[field])} : function(x) {return x[field]};
    reverse = !reverse ? 1 : -1;
    return function (a, b) {
      return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
    } 
  },
  sort: function(event){
    by = event.target.getAttribute('data-sort_by');
    elements = this.state.elements;
    func = by == 'title' ? function(a){return a.toUpperCase()} : null;
    order = !this.state.order_desc;
    elements = elements.sort(this.sort_by(by, order, func));
    this.setState({ 
      sort_by: by, 
      order_desc: order, 
      elements: elements
    });
  },
  render: function () {
    var nodes = this.state.elements.map(function ( item ) {
      return <Question item={ item } key={ item.id } />
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

        <div className="btn-group btn-group-xs">
          <span className='pull-left'>Sort by: </span> 
          <button type="button" className="btn btn-default" onClick={ this.sort } data-sort_by='timestamp'> time</button>
          <button type="button" className="btn btn-default" onClick={ this.sort } data-sort_by='votes_total'> votes</button>
          <button type="button" className="btn btn-default" onClick={ this.sort } data-sort_by='title'> title</button>
          <div className='clearfix'></div>
        </div>

        <br/><br/>

        <div className="list-group">
          { nodes }
        </div>
      </div>
    )
  }
});