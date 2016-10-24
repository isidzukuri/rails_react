var Question = React.createClass({
  render: function () {
    var item = this.props.item;
    var class_str = 'list-group-item';
    if(item.answer_id) class_str += ' list-group-item-success';
    var href = '/questions/' + item.id;
    return(
      <a className={class_str} href={ href }>
        <Votes item={ item } type='question' />
        { item.title }
        <small className='pull-right text-lowercase'>{ item.user.email } at { item.date }</small>
        <div className="clearfix"></div>
      </a>
    ) 
    
  }
});