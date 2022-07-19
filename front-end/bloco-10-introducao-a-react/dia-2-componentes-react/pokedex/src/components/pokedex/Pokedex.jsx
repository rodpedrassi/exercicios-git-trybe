import { Component } from 'react';
import data from '../../data';
import Pokemon from '../pokemon/Pokemon';

class Pokedex extends Component {
  render() {
    return data.map((pokemon) => {
      return (
        <Pokemon
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          type={pokemon.type}
          image={pokemon.image}
          value={pokemon.averageWeight.value}
          measurementUnit={pokemon.averageWeight.measurementUnit}
        />
      );
    });
  }
}

export default Pokedex;
