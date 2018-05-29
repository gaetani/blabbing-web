import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { withRouter } from 'react-router-dom'
import * as topicAction from '../actions/topic/topicAction';
import TalkCard from '../components/talkcard';
import BreadCrumb from '../components/breadcrumb';
import { Col, Row, Container, CardColumns } from 'reactstrap';
import './ThreadPage.css';




class TopicPage extends React.Component {

  componentDidMount(){
    this.props.actions.fetchTopic();
  }

  topicChildren = (topicChildren) => <TalkCard key={topicChildren._id} 
                                              linkto={"/thread/"+topicChildren._id}
                                              title={topicChildren.name}
                                              description={topicChildren.description} 
                                              latest={topicChildren.latest}/>

  topicItem = (category) => <BreadCrumb category={category} key={category._id}><CardColumns>{category.topics.map(this.topicChildren)}</CardColumns></BreadCrumb>

  topicsList = ({topics}) => {
    if(topics){
      return topics.map(this.topicItem);
    }
  }

  render() {
    
      return (
        <div className="page">
          {this.topicsList(this.props.topics)}
        </div>
      );
    
  }
}


function mapStateToProps(state) {
  return {topics: state.topic};
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(topicAction, dispatch)}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopicPage));
