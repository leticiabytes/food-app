export interface Food {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

export interface Category {
  id: number;
  name: string;
  image: string;
  foods: Food[];
}

export interface IData {
  categories: Category[];
}
