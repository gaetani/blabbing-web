import React from 'react';
import Spinner from '../spinner';

export default class ScrollWrapper extends React.PureComponent {
    
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
    }
    propTypes() {
        onWindowScroll: React.PropTypes.func
    }

    handleScroll(event) {
        
        if ((event.currentTarget.innerHeight + event.currentTarget.scrollY) 
           >= (event.currentTarget.document.body.offsetHeight - 1)) {
        
          if (this.props.onWindowScroll && !this.props.isLoading) {
        
              this.props.onWindowScroll(event);
          }
        }
    }

    render() {
        return (
            <div> 
                {this.props.children} 
                <Spinner isLoading={this.props.isLoading}/>
            </div>
        );
    }

    componentDidMount() {
        if (this.props.onWindowScroll) window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        if (this.props.onWindowScroll) window.removeEventListener("scroll", this.handleScroll);
    }
}


