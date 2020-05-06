export class Book {
  id: number;
  author: string;
  title: string;
  description: string;
  imageUrl: string;
  creator: string;
}

export class FavBook extends Book {
  owner: string;
}
