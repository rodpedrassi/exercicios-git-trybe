import React, { Component } from 'react';
import Nome from './components/Nome';

export default class Forms extends Component {
  state = {
    nome: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleClick = (event) => {
    const { nome } = this.state;
    event.preventDefault();
    alert(`ALOWWWWWW ${nome}`);
  };

  render() {
    const { nome } = this.state;

    return (
      <section>
        <h2>Formuláriozada?</h2>
        <form>
          <Nome name={nome} handleChange={this.handleChange} />
          <button onClick={this.handleClick}>Teste</button>
        </form>
      </section>
    );
  }
}
