import React from 'react';
import $ from 'jquery';
import TopicList from './Topiclist';


class Topic extends React.Component {
constructor(props) {
  super(props);
  //this.loadTopic = this.loadTopic.bind(this);
}

// loadTopic() {
//
// console.log("number one")
// }

  render() {
      return (
        <div>
          <TopicList />
            <div>
            {this.props.name}
            </div>
        </div>

      )
    }
  }

  export default Topic;
