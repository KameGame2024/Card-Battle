import { cardElement, originalCardType, Card, cardCategory } from "../types/cardType";

// Función para mapear la descripción de la carta a una categoría general
function getCardCategory(tipo: string): string {
  // Prioridad de categorías
  const priorities = [
    { category: 'MONSTER', keyword: 'monster' },
    { category: 'SPELL', keyword: 'spell' },
    { category: 'TRAP', keyword: 'trap' }
  ];

  // Convertir la descripción a minúsculas para una comparación insensible a mayúsculas
  const lowerCaseDescription = tipo.toLowerCase();

  // Buscar la categoría que coincida con las palabras clave, con la prioridad más alta
  for (const { category, keyword } of priorities) {
    if (lowerCaseDescription.includes(keyword)) {
      return cardCategory[category as keyof typeof cardCategory];
    }
  }

  // Devolver 'Unknown' o una categoría por defecto si no se encuentra ninguna coincidencia
  return 'Unknown';
}
// Función para traducir el objeto
export function translateCardObject(originalCard: originalCardType) : Card {
  // Mapeo de atributos a elementos, ajusta esto según corresponda
  const attributeToElementMap: { [key: string]: string } = {
    WATER: cardElement.WATER,
    FIRE: cardElement.FIRE,
    WIND: cardElement.WIND,
    LIGHT: cardElement.LIGHT,
    DARK: cardElement.DARK,
    DIVINE: cardElement.DIVINE,
    EARTH: cardElement.EARTH // Asumiendo que "Tierra" es el equivalente a EARTH en tu enumeración
  };

  

  return {
    name: originalCard.nombre, // Ajusta esto según cómo quieras formatear el nombre
    img: originalCard.imagen,
    attack: originalCard.ataque,
    defense: originalCard.defensa,
    element: attributeToElementMap[originalCard.atributo] || 'Unknown', // Usa 'Unknown' o cualquier otro valor predeterminado si el atributo no coincide
    category: getCardCategory(originalCard.tipo)// Usa 'Unknown' o cualquier otro valor predeterminado si el tipo no coincide
  };
}