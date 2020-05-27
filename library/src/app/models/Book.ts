export class Book {
  id: number;
  author: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
}

export class BookInCart extends Book {
  quantity: number;
}
