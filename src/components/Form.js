import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <h2 className="form-title">ADICIONE NOVA CARTA</h2>
        <label className="name-form" htmlFor="cardName">
          Nome
          <input
            type="text"
            data-testid="name-input"
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label className="form-description" htmlFor="cardDescription">
          Descrição da Carta
          <textarea
            data-testid="description-input"
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label className="atrib-one" htmlFor="cardAttr1">
          1-For
          <input
            type="number"
            data-testid="attr1-input"
            name="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
            min="0"
            max="90"
          />
        </label>
        <label className="atrib-two" htmlFor="cardAttr2">
          2-Agi
          <input
            type="number"
            data-testid="attr2-input"
            name="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
            min="0"
            max="90"
          />
        </label>
        <label className="atrib-three" htmlFor="cardAttr3">
          3-Con
          <input
            type="number"
            data-testid="attr3-input"
            name="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
            min="0"
            max="90"
          />
        </label>
        <label className="form-image" htmlFor="cardImage">
          Imagem
          <input
            type="text"
            data-testid="image-input"
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label className="form-rare" htmlFor="cardRare">
          Raridade
          <select
            name="cardRare"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <div className="form-end">
          <label className="form-trunfo" htmlFor="cardTrunfo">
            {
              !hasTrunfo
              && <input
                checked={ cardTrunfo }
                id="cardTrunfo"
                name="cardTrunfo"
                type="checkbox"
                data-testid="trunfo-input"
                onChange={ onInputChange }
              />
            }
            Super Trunfo
            {hasTrunfo
            && <p className="span-trunfo">Você já tem um Super Trunfo em seu baralho</p>}
          </label>
          <button
            className="form-btn"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar

          </button>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
