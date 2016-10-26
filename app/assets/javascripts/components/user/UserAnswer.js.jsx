var UserAnswer = React.createClass({

  render: function () {
    var item = this.props.item;
    var class_str = 'list-group-item';
    if(item.is_correct) class_str += ' list-group-item-success';
    var href = '/questions/' + item.question.id;

    return (
      <a className={ class_str } href={ href }>
        <Votes item={ item } type='answer' />
        <b>{ item.question.title }</b>
        <p> { item.content } </p>
        <div className='clearfix'></div>
      </a>
    )
  }
});