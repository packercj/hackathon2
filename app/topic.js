import React from 'react';
import ReactDOM from 'react-dom';
import TopicPage from './containers/TopicPage';

let id = window.location.pathname.split("/topics/")[1];

ReactDOM.render(<TopicPage id={id} />, document.getElementById('content'));
