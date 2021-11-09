import React from "react";
import {Breadcrumb, BreadcrumbItem, Card, CardBody, CardImg, CardText, CardTitle} from 'reactstrap';
import {Link} from 'react-router-dom';
   function RenderDish({dish}) {
        return (
        <Card className="mt-5">
            <CardImg with="100%" src={dish.image} alt={dish.name}/>
            <CardBody>
                <CardTitle tag="h5">{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
        );
    
    }
    function RenderComments({comments}) {
       console.log(comments);
        const commentPreview = comments.map((comment) =>{
            return (
                <div key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>{comment.author} {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                </div>
            );
        });

        return(commentPreview);
    }
   const DishDetails =  (props) => {
        if(props.dish !== undefined) {
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <Link to={`/home`}>Home</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <Link to={`/menu`}>Menu</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5">
                            <RenderDish dish={props.dish}/>
                        </div>
                        <div className="col-12 col-md-5 mt-5">
                            <RenderComments comments={props.comments}/>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (<div></div>);
        }
        
    }

export default DishDetails;
