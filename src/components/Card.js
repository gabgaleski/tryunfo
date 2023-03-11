import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
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
    } = this.props;
    return (
      <section className="main-card">
        <div className="background-card">
          <h3 data-testid="name-card">{cardName}</h3>
          <img
            data-testid="image-card"
            src={ cardImage }
            alt={ cardName }
          />
          <p
            className="card-description"
            data-testid="description-card"
          >
            {cardDescription}
          </p>
          <div className="attr1">
            <span>Força</span>
            <p data-testid="attr1-card">{cardAttr1}</p>
          </div>
          <div className="attr2">
            <span>Agilidade</span>
            <p data-testid="attr2-card">{cardAttr2}</p>
          </div>
          <div className="attr3">
            <span>Constituição</span>
            <p data-testid="attr3-card">{cardAttr3}</p>
          </div>
          <div className="type-div">
            <h6 data-testid="rare-card">{cardRare}</h6>
            {cardTrunfo && <h5 data-testid="trunfo-card">Super Trunfo</h5>}
          </div>
        </div>
      </section>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
