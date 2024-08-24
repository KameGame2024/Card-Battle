import { cardElement, originalCardType, Card, cardCategory } from "../types/cardType";

// Función para traducir el objeto
export function translateCardObject(originalCard: originalCardType) : Card {
  // Mapeo de atributos a elementos, ajusta esto según corresponda
  const attributeToElementMap: { [key: string]: string } = {
    Agua: cardElement.WATER,
    Fuego: cardElement.FIRE,
    Viento: cardElement.WIND,
    Luz: cardElement.LIGHT,
    Oscuridad: cardElement.DARK,
    Divino: cardElement.DIVINE,
    Tierra: cardElement.EARTH // Asumiendo que "Tierra" es el equivalente a EARTH en tu enumeración
  };

  const categoryToElementMap: { [key: string]: string } = {
    Monstruo: cardCategory.MONSTER,
    Hechizo: cardCategory.SPELL,
    Trampa: cardCategory.TRAP
  };

  return {
    name: originalCard.nombre, // Ajusta esto según cómo quieras formatear el nombre
    img: originalCard.imagen,
    attack: originalCard.ataque,
    defense: originalCard.defensa,
    element: attributeToElementMap[originalCard.atributo] || 'Unknown', // Usa 'Unknown' o cualquier otro valor predeterminado si el atributo no coincide
    category: categoryToElementMap[originalCard.tipo] || 'Unknown' // Usa 'Unknown' o cualquier otro valor predeterminado si el tipo no coincide
  };
}