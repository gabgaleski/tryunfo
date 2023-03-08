import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    cardList: [],
  };

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  };

  onSaveButtonClick = () => {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    const cardAdd = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    this.setState((previousState) => ({
      cardList: [...previousState.cardList, cardAdd],
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    }));
  };

  removeCardBtn = (i) => {
    this.setState((previousState) => ({
      cardList: previousState.cardList.filter((card, cardIndex) => cardIndex !== i),
    }));
  };

  // Colocar todos os estatos para importar, caso contrario nao da certo

  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      cardList,
    } = this.state;

    const maxPower = 210;
    const maxAttr = 90;
    const hasTrunfo = cardList.some((card) => card.cardTrunfo === true);

    const isSaveButtonDisabled = cardName.length > 0
    && cardDescription.length > 0
    && cardImage.length > 0
    && cardRare.length > 0
    && Number(cardAttr1) <= maxAttr
    && Number(cardAttr2) <= maxAttr
    && Number(cardAttr3) <= maxAttr
    && Number(cardAttr1) >= 0
    && Number(cardAttr2) >= 0
    && Number(cardAttr3) >= 0
    && Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= maxPower;
    return (
      <div>
        <h1>Tryunfo </h1>
        <div className="form-card-container">
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            onInputChange={ this.onInputChange }
            isSaveButtonDisabled={ !isSaveButtonDisabled }
            onSaveButtonClick={ this.onSaveButtonClick }
            hasTrunfo={ hasTrunfo }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            onInputChange={ this.onInputChange }
          />
        </div>
        <div className="cardList">
          {cardList.map((card, index) => (
            <div key={ index }>
              <h3>{card.cardName}</h3>
              <p>{card.cardDescription}</p>
              <h6>{card.cardAttr1}</h6>
              <h6>{card.cardAttr2}</h6>
              <h6>{card.cardAttr3}</h6>
              <img src={ card.cardImage } alt={ card.cardName } />
              <h5>
                Raridade:
                {card.cardRare}
              </h5>
              {card.cardTrunfo && <p>SUPER TRUNFO</p>}
              <button
                data-testid="delete-button"
                onClick={ () => this.removeCardBtn(index) }
              >
                Excluir

              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
