import React from 'react';
import PropTypes, { shape } from 'prop-types';

class Filters extends React.Component {
  state = {
    filterName: '',
    filterRare: 'todas',
    checkboxTrunfo: false,
  };

  handleSearchChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { filterName, filterRare, checkboxTrunfo } = this.state;
    const { cardList, removeCardBtn } = this.props;
    const cardListFilter = cardList.filter((card) => {
      const name = card.cardName;
      return name.toUpperCase().includes(filterName.toUpperCase());
    });

    const cardFilterType = cardList.filter((card) => {
      const type = card.cardRare;
      return type === filterRare;
    });

    const trunfoCard = cardList.filter((card) => card.cardTrunfo);

    const nameFilter = cardListFilter.map((card, index) => (
      <div key={ card.cardName }>
        <section className="main-card">
          <div className="background-card">
            <h3 data-testid="name-card">{card.cardName}</h3>
            <img
              data-testid="image-card"
              src={ card.cardImage }
              alt={ card.cardName }
            />
            <p
              className="card-description"
              data-testid="description-card"
            >
              {card.cardDescription}
            </p>
            <div className="attr1">
              <span>Força</span>
              <p data-testid="attr1-card">{card.cardAttr1}</p>
            </div>
            <div className="attr2">
              <span>Agilidade</span>
              <p data-testid="attr2-card">{card.cardAttr2}</p>
            </div>
            <div className="attr3">
              <span>Constituição</span>
              <p data-testid="attr3-card">{card.cardAttr3}</p>
            </div>
            <div className="type-div">
              <h6 data-testid="rare-card">{card.cardRare}</h6>
              {card.cardTrunfo && <h5 data-testid="trunfo-card">Super Trunfo</h5>}
            </div>
            <button
              className="btn-delet"
              data-testid="delete-button"
              onClick={ () => removeCardBtn(index) }
            >
              Excluir

            </button>
          </div>
        </section>

      </div>
    ));

    const typeFilter = cardFilterType.map((card, index) => (
      <div key={ card.cardName }>
        <section className="main-card">
          <div className="background-card">
            <h3 data-testid="name-card">{card.cardName}</h3>
            <img
              data-testid="image-card"
              src={ card.cardImage }
              alt={ card.cardName }
            />
            <p
              className="card-description"
              data-testid="description-card"
            >
              {card.cardDescription}
            </p>
            <div className="attr1">
              <span>Força</span>
              <p data-testid="attr1-card">{card.cardAttr1}</p>
            </div>
            <div className="attr2">
              <span>Agilidade</span>
              <p data-testid="attr2-card">{card.cardAttr2}</p>
            </div>
            <div className="attr3">
              <span>Constituição</span>
              <p data-testid="attr3-card">{card.cardAttr3}</p>
            </div>
            <div className="type-div">
              <h6 data-testid="rare-card">{card.cardRare}</h6>
              {card.cardTrunfo && <h5 data-testid="trunfo-card">Super Trunfo</h5>}
            </div>
            <button
              className="btn-delet"
              data-testid="delete-button"
              onClick={ () => removeCardBtn(index) }
            >
              Excluir

            </button>
          </div>
        </section>

      </div>
    ));

    const trunfoFilter = trunfoCard.map((card, index) => (
      <div key={ card.cardName }>
        <section className="main-card">
          <div className="background-card">
            <h3 data-testid="name-card">{card.cardName}</h3>
            <img
              data-testid="image-card"
              src={ card.cardImage }
              alt={ card.cardName }
            />
            <p
              className="card-description"
              data-testid="description-card"
            >
              {card.cardDescription}
            </p>
            <div className="attr1">
              <span>Força</span>
              <p data-testid="attr1-card">{card.cardAttr1}</p>
            </div>
            <div className="attr2">
              <span>Agilidade</span>
              <p data-testid="attr2-card">{card.cardAttr2}</p>
            </div>
            <div className="attr3">
              <span>Constituição</span>
              <p data-testid="attr3-card">{card.cardAttr3}</p>
            </div>
            <div className="type-div">
              <h6 data-testid="rare-card">{card.cardRare}</h6>
              {card.cardTrunfo && <h5 data-testid="trunfo-card">Super Trunfo</h5>}
            </div>
            <button
              className="btn-delet"
              data-testid="delete-button"
              onClick={ () => removeCardBtn(index) }
            >
              Excluir

            </button>
          </div>
        </section>

      </div>
    ));

    return (
      <div>
        <input
          data-testid="name-filter"
          type="text"
          placeholder="Filtrar por nome:"
          name="filterName"
          onChange={ this.handleSearchChange }
          value={ filterName }
          disabled={ checkboxTrunfo }
        />
        <select
          data-testid="rare-filter"
          onChange={ this.handleSearchChange }
          name="filterRare"
          value={ filterRare }
          disabled={ checkboxTrunfo }
        >
          <option value="todas">todas</option>
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        <label
          htmlFor="checkboxTrunfo"
        >
          Super Trunfo
          <input
            type="checkbox"
            data-testid="trunfo-filter"
            name="checkboxTrunfo"
            onChange={ this.handleSearchChange }
            checked={ checkboxTrunfo }
          />
        </label>
        {!checkboxTrunfo && filterRare === 'todas' && nameFilter}
        {!checkboxTrunfo && filterRare !== 'todas' && typeFilter}
        {checkboxTrunfo && trunfoFilter }
      </div>
    );
  }
}

Filters.propTypes = {
  removeCardBtn: PropTypes.func.isRequired,
  cardList: PropTypes.arrayOf(shape({
    cardName: PropTypes.string.isRequired,
    cardDescription: PropTypes.string.isRequired,
    cardAttr1: PropTypes.number.isRequired,
    cardAttr2: PropTypes.number.isRequired,
    cardAttr3: PropTypes.number.isRequired,
    cardImage: PropTypes.string.isRequired,
    cardRare: PropTypes.string.isRequired,
    cardTrunfo: PropTypes.bool.isRequired,
  })).isRequired,
};

export default Filters;
