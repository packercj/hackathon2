import React from 'react';
import $ from 'jquery';

class Topic extends React.Component {
  constructor(props){
    super(props);
    this.state = { items: [] }
  }

  componentWillMount() {
		$.ajax({
			url: '/:id/',
			type: 'GET',
			dataType: 'JSON'
		}).done( items => {
      console.log(items, "this works");
      this.setState({ items });
    });
	}

  render() {
    return (
      <div className="center">
        <div>{this.props.name}</div>
        <div>{this.props.description}</div>
      </div>
    )
  }
}

export default Topic;
