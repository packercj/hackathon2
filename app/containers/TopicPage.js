import React from 'react';
import $ from 'jquery';

class TopicPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { items: [] }
  }

  componentWillMount() {
    $.ajax({
      url: `/topics/${this.props.id}/items`,
      type: 'GET',
      dataType: 'JSON'
    }).done( items => {
      this.setState({ items })
    })
  }

  render() {
    let items = this.state.items.map( item => {
      return(<li className="collection-item" key={item._id}>{item.name}</li>)
    })
    return (
      <ul className="collection">
        {items}
      </ul>
    )
  }
}

export default TopicPage;
