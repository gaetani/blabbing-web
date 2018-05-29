import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { withRouter } from 'react-router-dom'
import * as threadAction from '../actions/thread/threadAction';
import TalkCard from '../components/talkcard';
import BreadCrumb from '../components/breadcrumb';
import ScrollWrapper from '../components/scrollwrapper';
import Spinner from '../components/spinner';
import { Col, Row, Container, CardColumns } from 'reactstrap';
import './ThreadPage.css';
import BreadcrumbContainer from './BreadcrumbContainer';




class ThreadPage extends React.Component {

  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount(){

    const { threadId } = this.props.match.params;
    this.props.actions.fetchThread({
      threadId: threadId
    });

    this.setState({
      isLoading: true,
      threadId: threadId,
      page: 1,
      reachEnd: false
    });
  }

  loadMore(){
    if(this.state.reachEnd) return;
    this.setState({
      isLoading: true,
      page: this.state.page+1
    });
    this.props.actions.fetchThread({
      threadId: this.state.threadId,
      page: this.state.page
    });

  }
  componentWillReceiveProps(nextProps){
    const reachEnd = nextProps.thread.threads.length ==0;
    this.setState({reachEnd: reachEnd,
                  isLoading: false,
                  threads: this.state.threads? 
                  this.state.threads.concat(nextProps.thread.threads) : nextProps.thread.threads});
  }

  threadChildren = (threadChildren) => <TalkCard key={threadChildren._id} 
                                              linkto={"/thread/"+threadChildren._id+'/messages'}
                                              title={threadChildren.name}
                                              description={threadChildren.description} 
                                              latest={threadChildren.latest}/>
  handleScroll = (event) =>  {
      this.loadMore();
  };

  footer = () => {
    return (
      <div>adasda</div>
    );
  }

  render() {
      const {thread} = this.props;
      if(!thread.threads){
        return <div></div>
      }
      


      
      return (
        <BreadcrumbContainer id={thread._id} footer={this.footer()}>
          <ScrollWrapper onWindowScroll={this.handleScroll} isLoading={this.state.isLoading}>
            <CardColumns>
                {this.state.threads.map(this.threadChildren)}
            </CardColumns>
          </ScrollWrapper>
        </BreadcrumbContainer>
      );
    
  }
}


function mapStateToProps(state) {
  return {thread: state.thread};
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(threadAction, dispatch)}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ThreadPage));
