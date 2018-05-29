import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { withRouter } from 'react-router-dom'
import * as messageAction from '../actions/message/messageAction';
import MessageCard from '../components/messagecard';
import BreadCrumb from '../components/breadcrumb';
import ScrollWrapper from '../components/scrollwrapper';
import Spinner from '../components/spinner';
import { Collapse, Button, CardBody, Card , Col, Row, Container, CardDeck } from 'reactstrap';
import './ThreadPage.css';
import BreadcrumbContainer from './BreadcrumbContainer';
import EditorComponent from '../components/editor';



class MessagesPage extends React.Component {

  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.toggle = this.toggle.bind(this);
    
  }
  componentDidMount(){

    const { threadId } = this.props.match.params;
    this.props.actions.fetchMessages({
      threadId: threadId
    });

    this.setState({
      isLoading: true,
      threadId: threadId,
      collapse: false,
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
    this.props.actions.messageAction({
      threadId: this.state.threadId,
      page: this.state.page
    });

  }
  componentWillReceiveProps(nextProps){
    const reachEnd = nextProps.message.messages.length ==0;
    this.setState({reachEnd: reachEnd,
                  isLoading: false,
                  collapse: false,
                  messages: this.state.messages? 
                  this.state.messages.concat(nextProps.message.messages) : nextProps.message.messages});
  }

  messageChildren = (user) => (messageChildren) => <MessageCard key={messageChildren._id} 
                                              linkto={"/message/"+messageChildren._id}
                                              title={messageChildren.name}
                                              message={messageChildren.message} 
                                              datePost={messageChildren.datePost}
                                              user={user[messageChildren.userId]}/>
  handleScroll = (event) =>  {
     // this.loadMore();
  };

  toggle = () => this.setState({collapse: !this.state.collapse}); 

  messageBox = (message) =>       <Collapse isOpen={this.state.collapse}>
                                    <Card>
                                      <CardBody>
                                      Anim pariatur cliche reprehenderit,
                                      enim eiusmod high life accusamus terry richardson ad squid. Nihil
                                      anim keffiyeh helvetica, craft beer labore wes anderson cred
                                      nesciunt sapiente ea proident.
                                      </CardBody>
                                    </Card>
                                  </Collapse>

  footer = () => {
    return (
      <div ><EditorComponent collapse={this.state.collapse}/></div>
    );
  }

  render() {
      const {message} = this.props;
      if(!message.messages){
        return <div></div>
      }
      
      const messageChildren = this.messageChildren(message.user);
      return (
        <BreadcrumbContainer id={message.thread._id} footer={this.footer()}>
          <ScrollWrapper onWindowScroll={this.handleScroll} isLoading={this.state.isLoading}>
            <div className="content">
                {this.state.messages.map(messageChildren)}
            </div>
          </ScrollWrapper>
        </BreadcrumbContainer>
      );
    
  }
}


function mapStateToProps(state) {
  return {message: state.message};
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(messageAction, dispatch)}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessagesPage));
