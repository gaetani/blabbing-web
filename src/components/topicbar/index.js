import React from 'react';
import './TopicBar.css';
import FaFolder from 'react-icons/lib/fa/folder';

export default class TopicBar extends React.PureComponent {
  render() {
    return (
      <div className="topic-page">
        <div className="topicBar">
            <div className="topicBar-content">
              <span className="topicBar-icon"><FaFolder /></span> 
              <span className="topicBar-text">

                  {this.props.title}
              </span>
            </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}