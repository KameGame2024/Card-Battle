import { defaultCardsPlayer1, defaultCardsPlayer2 } from "../store/cardsStore";
import { originalCardType, Card } from "../types/cardType";
import { translateCardObject } from "../utils/translateCards";

export const FetchCards = async() => {
  let cards1: Card[]  = []
  let cards2: Card[]  = []
  

  // Obtener datos de la API
  try {
    const response = await fetch('https://my-json-server.typicode.com/hinarasm12/ApiCard/cartas');
    const data = await response.json();

    let translatedCards1 = data.map((card : originalCardType) => translateCardObject(card));
    const translatedCards2 = defaultCardsPlayer2.map((card : originalCardType) => translateCardObject(card));

    if (translatedCards1.length < 18){
      translatedCards1 = defaultCardsPlayer1.map((card : originalCardType) => translateCardObject(card));
    }
    
    cards1 = translatedCards1
    cards2 = translatedCards2
  } catch (error) {
    const translatedCards2 = defaultCardsPlayer2.map((card : originalCardType) => translateCardObject(card));
    const translatedCards1 = defaultCardsPlayer1.map((card : originalCardType) => translateCardObject(card));
    cards1 = translatedCards1
    cards2 = translatedCards2
  }

  return { cards1, cards2 };
}