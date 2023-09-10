export interface Food {
  id: number;
  name: string;
  price: number;
  image: string;
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
