import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';  
import FaCopy from 'react-icons/lib/fa/copy';
import Moment from 'react-moment';
import FaCommentO from 'react-icons/lib/fa/comment-o';
import './TalkCard.css';


export default class TalkCard extends React.Component {
  render() {
      return (
            <div>
                <Card body outline color="secondary">
                    <CardBody>
                    <CardTitle><Link to={this.props.linkto} >{this.props.title}</Link></CardTitle>
                    <CardText>
                        {this.props.description}
                    </CardText>
                    <CardText>
                    <small className="text-muted">
                            <span className="small-text-inline">
                                <FaCommentO /> {this.props.commentCount}
                            </span>
                            <span className="small-text-inline">
                                <FaCopy /> {this.props.threadCount}
                            </span>
                        </small>
                    </CardText>
                    </CardBody>
                    {/*
                    <CardFooter className="text-muted">
                        Latest: {this.props.latest.name}, {this.props.latest.user},&nbsp;
                        <Moment fromNow ago>{this.props.latest.date}</Moment>
                    </CardFooter>
                    */}
                </Card>
            </div>
        );
    }
};

