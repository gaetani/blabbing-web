import React from 'react';
import './Breadcrumb.css';
import FaFolderOpen from 'react-icons/lib/fa/folder-open';
import FaFolder from 'react-icons/lib/fa/folder';
import { Link } from 'react-router-dom';  
import { BreadcrumbItem, Breadcrumb, Container, Row, Col } from 'reactstrap';

export default class BreadCrumb extends React.PureComponent {

  render() {
    const { category, topic, thread } = this.props;
    if(!category) {
      return <div>{this.props.children}</div>;
    }
    return [
    <div className="topicBar">
      <Breadcrumb className="breadcrumb-component">
        <div className="icon">
          { !topic ? <FaFolder />: <FaFolderOpen />}
        </div>
      
          <BreadcrumbItem className="breadcrumb-topic"><Link to="/">{ category.name }</Link></BreadcrumbItem> 
          { topic ? <BreadcrumbItem><Link to={`/thread/${topic.id}`}>{ topic.name }</Link></BreadcrumbItem> : '' }
          { thread ? <BreadcrumbItem>{ thread.name }</BreadcrumbItem> : '' }
          
          
      
      </Breadcrumb>

      <div className="topic-text">
            { !topic? this.props.description : topic.description}
      </div>
    </div>,
      <div>{this.props.children}</div>
    ];
  }
}