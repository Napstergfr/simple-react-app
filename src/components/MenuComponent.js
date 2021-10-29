import React from "react";
import {Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';
function RenderMenuItem({dish, onClick}){
    return (
        <Card onClick={() => onClick(dish.id)}>
                        <CardImg with="100%" src={dish.image} alt={dish.name}/>
                        <CardImgOverlay>
                            <CardTitle><b>{dish.name}</b></CardTitle>
                        </CardImgOverlay>
        </Card>
    );

}

const Menu = (props) => {
    const menu = props.dishes.map((dish) =>{
        return (
            <div key={dish.id} className="col-12 col-md-5 mt-5">
                <RenderMenuItem dish={dish} onClick={props.onClick}></RenderMenuItem>
            </div>
        );
    });
    return (
        <div className="container">
            <div className="row">
                    {menu}
            </div>
        </div>
    );
}
        

export default Menu;