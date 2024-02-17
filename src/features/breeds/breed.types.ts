export interface Breed {
    id: string;
    name: string;
    description: string
    temperament: string
    origin: string
  }
  
export interface CatImage {
    id: string;
    url: string;
    width: number;
    height: number;
    breeds?: Breed[]
}