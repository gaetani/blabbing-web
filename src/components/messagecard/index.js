import React from 'react';
import { Media, Container, Row, Col } from 'reactstrap';
import './MessageCard.css';
import {Editor, EditorState} from 'draft-js';
import ReactDOMServer from 'react-dom/server';
import { Parser } from 'html-to-react';
import Moment from 'react-moment';


const MAX_WIDTH = 560;
export default class MessageCard extends React.PureComponent {

    constructor(props){
        super(props);
        this.state = {width: window.innerWidth};
    }

    updateDimensions() {
        this.setState({width: window.innerWidth});
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    render() {

        const message = new Parser().parse(`<blockquote>${this.props.message}</blockquote>`);
        return (   
        <Media className="message-card">
            <div className={this.state.width < MAX_WIDTH ? 'message-card-horizontal': ''}>
                <Media left top href="#">
                <Container>
                    <Row>
                        <Col className="avatar" >
                            <img src={this.props.user.avatar} alt=""/>
                        </Col>
                    </Row>
                    <Row>
                        <Col >
                            <h3 className="user">
                                {this.props.user.name}
                            </h3>
                        </Col>
                    </Row>
                </Container>
                </Media>
            </div>
            
            <Media body className="message-content">
                <Media heading>
                    Top aligned media
                </Media>
                        
                            {message}
                        
                            <small className="text-muted">
                                <span className="small-text-inline">
                                {this.props.user.name}, <Moment date={this.props.datePost} fromNow />
                                </span>
                            </small>
            </Media>
        </Media>

    );
    }
};

