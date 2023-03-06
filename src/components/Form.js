import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            data-testid="name-input"
            name="name"
          />
        </label>
        {' '}
        <label htmlFor="description">
          Descrição da Carta
          <textarea
            data-testid="description-input"
            name="description"
          />
        </label>
        {' '}
        <label htmlFor="atrib1">
          Primeiro Atributo
          <input
            type="number"
            data-testid="attr1-input"
            name="atrib1"
          />
        </label>
        {' '}
        <label htmlFor="atrib2">
          Segundo Atributo
          <input
            type="number"
            data-testid="attr2-input"
            name="atrib2"
          />
        </label>
        {' '}
        <label htmlFor="atrib3">
          Terceiro Atributo
          <input
            type="number"
            data-testid="attr3-input"
            name="atrib3"
          />
        </label>
        {' '}
        <label htmlFor="image">
          Imagem
          <input
            type="text"
            data-testid="image-input"
            name="image"
          />
        </label>
        {' '}
        <label htmlFor="rare">
          Raridade
          <select name="rare" data-testid="rare-input">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        {' '}
        <label htmlFor="trunfo">
          Super Trunfo
          <input name="trunfo" type="checkbox" data-testid="trunfo-input" />
        </label>
        {' '}
        <button data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
