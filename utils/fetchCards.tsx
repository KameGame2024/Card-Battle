import { defaultCardsPlayer1, defaultCardsPlayer2 } from "../store/cardsStore";
import { originalCardType, Card, cardFetchResponseType } from "../types/cardType";
import { translateCardObject } from "../utils/translateCards";

export const FetchCards = async(user_id:number) => {
  let cards1: Card[]  = []
  let cards2: Card[]  = []

  const fetchedCards: originalCardType[] = []

  const base_url = import.meta.env.VITE_APP_API_DECK_URL;

  const url = `${base_url}/${user_id}/cartas_baraja`;

  // Obtener datos de la API
  try {
    // Cambiar la URL por la de la API de andrés
    const response = await fetch(url);
    const data = await response.json();
    // Mapear las cartas que vienen con cantidad a un arreglo de cartas
    data.forEach((card : cardFetchResponseType) => {

      for (let i = 0; i < card.cantidad; i++) {
        const newCard = {
          id: card.id,
          imagen: card.imagen,
          nombre: card.nombre,
          descripcion: card.descripcion,
          ataque: card.ataque,
          defensa: card.defensa,
          precio: card.precio,
          tipo: card.tipo,
          atributo: card.atributo
        }

        fetchedCards.push(newCard);
        
      }
    });

    let translatedCards1 = fetchedCards.map((card : originalCardType) => translateCardObject(card));
    const translatedCards2 = defaultCardsPlayer2.map((card : originalCardType) => translateCardObject(card));

    if (translatedCards1.length !== 18){
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