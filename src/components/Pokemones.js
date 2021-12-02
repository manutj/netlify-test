import React, { Component } from 'react';
import axios from 'axios'
import Pokemon from './Pokemon'
const url='https://pokeapi.co/api/v2/pokemon'

class Pokemones extends Component {
    state = { 
        pokemones:[]
     }
     componentDidMount(){
         axios.get(url)
         .then(
             //res=>console.log(res.data.results)
               res=>{
                  const pokemones=res.data.results
                  pokemones.forEach(pokemon=>{
                       //console.log(pokemon.name, pokemon.url)
                       axios.get(pokemon.url)
                        .then(
                            //res=>console.log(pokemon.name, res.data)
                            res=>{
                                let pokemones=this.state.pokemones
                                pokemones.push(res.data)
                                this.setState({
                                    pokemones
                                })
                            }
                        )
                        .catch()
                   })
              }
         )
         .catch()
     }
    render() { 
        return ( 
            <React.Fragment>
                <div>LISTA DE POKEMONES</div>
                {
                    this.state.pokemones.map(pokemon=>{
                        return <Pokemon name={pokemon.name} img={pokemon.sprites.front_default}></Pokemon>
                    })
                }
            </React.Fragment>
         );
    }
}
 
export default Pokemones
