import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { withRouter } from 'react-router-dom'
import * as breadcrumbAction from '../actions/breadcrumb/breadcrumbAction';
import BreadCrumb from '../components/breadcrumb';

class BreadCrumbContainer extends React.Component {

  componentDidMount(){

    const { id } = this.props;
  
    this.props.actions.fetchBreadcrumb(id);
  }


  render() {
    const { thread, topic, category} =  this.props.breadcrumb;

      return (
        <div className="page">
          <header><BreadCrumb category={category} topic={topic} thread={thread}></BreadCrumb></header>
          <main>{this.props.children}</main>
          <footer>{this.props.footer}</footer>
        </div>
      );
    
  }
}


function mapStateToProps(state) {
  return {breadcrumb: state.breadcrumb};
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(breadcrumbAction, dispatch)}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BreadCrumbContainer));
