import { Component } from 'react';

class Pokemon extends Component {
  render() {
    const id = this.props.id;
    const name = this.props.name;
    const type = this.props.type;
    const image = this.props.image;
    const value = this.props.value;
    const measurementUnit = this.props.measurementUnit;
    return (
      <div>
        <p>ID: {id}</p>
        <p>Name: {name}</p>
        <p>Type: {type}</p>
        <p>
          Weigth: {value}
          {measurementUnit}
        </p>
        <img src={image} alt={`Imagem do ${name}`}></img>
      </div>
    );
  }
}
export default Pokemon;
