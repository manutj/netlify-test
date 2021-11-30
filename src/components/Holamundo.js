import React, { Component } from 'react';

class Holamundo extends Component {
    nombre='Manuel'
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
            <div className='container'>
            <h1 className='miclase'
            style={{
                color:'red',
                fontSize:'50px'
            }}
            >Hola {this.nombre} desde el componente HolaMundo</h1>
            <img alt='foto' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-muTS8iqmATHfEnLmY2OLnKPu0c6EJAxFkTujJ_XtOjJzeFmd&s'></img>
            </div>
            </React.Fragment>
         );
    }
}
 
export default Holamundo ;