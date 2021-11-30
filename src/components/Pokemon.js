import React, { Component } from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap'

class Pokemon extends Component {
    state = { 
        //img:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
        //name:'Ditto',
        //weight:19,
        //description:'Soy Ditto',
        img:this.props.img,
        name:this.props.name
     }
    render() { 
        return ( 
            <Card className='mt-4' style={{backgroundColor:'#f7b9b5', height:'550px', width:'450px'}}> 
            
                <CardBody>
                <CardImg  style={{ width:'100%'}} src={this.state.img}></CardImg>
                <CardTitle><b>{this.state.name}</b></CardTitle>
                <CardSubtitle>{`Peso: ${this.state.weight}`}</CardSubtitle>
                <CardText>{this.state.description}</CardText>
                </CardBody>
             </Card>
         );
    }
}
 
export default Pokemon;
