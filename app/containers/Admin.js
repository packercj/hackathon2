import React from 'react';
import $ from 'jquery';

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.addTopic = this.addTopic.bind(this);
    this.getTopics = this.getTopics.bind(this);
    this.addTopic = this.addTopic.bind(this);
    this.state = { topics: [] }
  }

  componentDidMount() {
    this.getTopics();
  }

  getTopics() {
    $.ajax({
      url: '/admin/topics',
      type: 'GET',
      dataType: 'JSON'
    }).done( topics => {
      this.setState({ topics });
    })
  }

  addTopic(e) {
    e.preventDefault();
    $.ajax({
      url: '/admin/topics',
      type: 'POST',
      data: { name: this.refs.name.value }
    }).done( topic => {
      this.setState({ topics: [...this.state.topics, topic ]});
      this.refs.form.reset();
    });
  }

  addItem(id) {
    event.preventDefault();
    $.ajax({
      url: `/admin/topics/${id}/items`,
      type: 'POST',
      data: { name: this.refs.itemName.value, description: this.refs.itemDescription.value },
      dataType: 'JSON'
    }).done( item => {
      this.refs.itemForm.reset();
    });

  }

  render() {
    let topics = this.state.topics.map( topic => {
      return (
        <div>
          <h3>{topic.name}</h3>
          <h4>Add Item</h4>
          <form ref='itemForm' onSubmit={() => this.addItem(topic._id)}>
            <input ref='itemName' placholder="name" />
            <input ref="itemDescription" placeholder="description" />
            <button className="btn" type="submit">Submit</button>
          </form>
        </div>
      )
    });

    return (
      <div>
        <form onSubmit={this.addTopic} ref="form">
          <input ref="name" placeholder="topic" />
        </form>
        {topics}
      </div>
    )
  }

}

export default Admin;
