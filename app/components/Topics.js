import React from 'react';
import Topic from './Topic';
import $ from 'jquery';


class Topics extends React.Component {
	constructor(props){
		super(props);
		this.state = { topics: [] }
  }

	componentWillMount() {
		$.ajax({
			url: '/topics',
			type: 'GET',
			dataType: 'JSON'
		}).done( topics => {
      this.setState({ topics });
    })
	}

	render() {
		let topics = this.state.topics.map( topic => {
			return(
        <a href={`/topics/${topic._id}`}>
          <div className='col s4 card'>
            <div className='card-content'>
              <Topic {...topic} />
            </div>
          </div>
        </a>
      )
		})
		return (

			<div className='container'>
        <div >
				    {topics}
			  </div>
      </div>
		)
	}
}

export default Topics;
