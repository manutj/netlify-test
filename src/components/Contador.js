import React, { Component } from 'react';
import {Button,Badge} from 'reactstrap'

class Contador extends Component {
    state = { 
        titulo:'Alpha',
        valor:this.props.valor
     }

        incrementar=()=>{
            //this.state.valor++
//console.log(this.state)
            this.setState({
                valor:this.state.valor+1
            })

        }

        decrementar=()=>{
            this.setState({
                valor:this.state.valor-1
            })

        }

        renderValor=()=>{
            if(this.state.valor>0){
                return <Badge color='primary' 
                style={{
                    fontSize:'50px'
                }}>{this.state.valor}</Badge>
            } else if(this.state.valor<0){
                return <Badge color='danger'
                style={{
                    fontSize:'50px'
                }}>{this.state.valor}</Badge>
            }else{
                return <Badge color='warning'
                style={{
                    fontSize:'50px'
                }}>Cero</Badge>
            }
        }

    render() { 
        return ( 
            <React.Fragment>
            
            <div className='container'>
            <h2 className='mt-4'>
                {this.state.titulo}
            </h2>
           {this.renderValor()}
                
                <Button onClick={this.incrementar}
                style={{
                    fontSize:'25px'
                }}
                className='ml-2 mr-2' color='primary'>+</Button>
                <Button onClick={this.decrementar}
                style={{
                    fontSize:'25px'
                }}
                color='danger'>_</Button>

            </div>
            </React.Fragment>
         );
    }
}
 
export default Contador;