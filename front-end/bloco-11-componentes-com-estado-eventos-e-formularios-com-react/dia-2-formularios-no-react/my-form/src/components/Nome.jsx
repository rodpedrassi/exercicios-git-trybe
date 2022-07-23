import React, { Component } from 'react';

export default class Nome extends Component {
  render() {
    const { handleChange } = this.props;

    return (
      <label>
        Nome
        <input
          type='text'
          name='nome'
          id='nome'
          placeholder='Digite seu nome'
          onChange={handleChange}
        />
      </label>
    );
  }
}

// Nome - Texto
// Limite de 40 caracteres
// Todos os caracteres devem ser transformados para UPPER CASE assim que forem digitados.
// Campo obrigatório
