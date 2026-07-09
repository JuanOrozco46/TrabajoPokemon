// Esta interfaz representa la respuesta del primer endpoint (la lista general)
export interface PokeAPIResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonResult[]; // Un arreglo de objetos con nombre y url
}
// Esta representa la estructura de cada Pokémon dentro del arreglo anterior
export interface PokemonResult {
  name: string;
  url: string; // La URL individual para consultar sus detalles reales
}
// Esta representa los datos reales y detallados del Pokémon que usaremos en la pantalla
export interface PokemonDetail {
  id: number;                 // ID o número de Pokédex
  name: string;               // Nombre del Pokémon
  sprites: {
    front_default: string;    // URL de la imagen frontal del Pokémon
  };
  height: number;             // Propiedad de detalle 1: Altura
  weight: number;             // Propiedad de detalle 2: Peso
  base_experience: number;    // Propiedad de detalle 3: Experiencia base
  types: {
    slot: number;
    type: {
      name: string;           // Propiedad de detalle 4: Tipo (fuego, agua, planta, etc.)
    };
  }[]; // El corchete [] indica que un Pokémon puede tener más de un tipo
}