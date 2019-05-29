import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap'

import { baseUrl } from '../shared/baseUrl'

function RenderComments({comments}){
    var commentList = comments.map(comment => {
        return (
            <li key={comment.id} >
                {comment.comment}
                <br /><br />
                -- {comment.author}, {new Intl.DateTimeFormat('pt-BR', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}
                <br /><br />
            </li>
        );
    });

    return (
        <div>
            <h4>Comments</h4>
            <ul className="list-unstyled">
                {commentList}
            </ul>
        </div>
    );
}

function RenderDish({dish}){
    return (
        <Card>
            <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    );
}

export class DishDetail extends Component{

    constructor(props){
        super(props)
    }

    render(){
        if( this.props.dish != null ){
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={this.props.dish} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            { this.props.comments != null ? <RenderComments comments={this.props.comments} /> : <div></div> }
                        </div>
                    </div>
                </div>
            )
        }else{
            return(
                <div></div>
            )
        }
        
    }
}