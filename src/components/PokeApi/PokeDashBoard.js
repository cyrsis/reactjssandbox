import React, { Component } from 'react';

const baseUrl = 'http://pokeapi.co/api/v2'

class PokeDashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: []

    }
        this.loadPokemon = this.loadPokemon.bind(this)
    }

    loadPokemon(baseUrl) { //Will get something back is call promise
        //.then once we have something
      fetch(baseUrl).then(response => {
          return response.json();
      }).then((json) => {
          console.log('parsed json', json)
      }).then((error) => {
          console.log('Error',error)
      })
    }

    componentWillMount() {
        this.loadPokemon(`${baseUrl}/pokemon/`)
    }


    render() {
        return (
            <div>

            </div>
        );
    }
}

export default PokeDashBoard;
