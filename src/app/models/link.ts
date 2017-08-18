export interface ILink {
  id: number;
  author: string;
  date: string;
  description: string;
  image: string;
  publisher: string;
  title: string;
  url: string;
  tags: string;

}
export class Link implements ILink {
  id: number;
  author: string;
  date: string;
  description: string;
  image: string;
  publisher: string;
  title: string;
  url: string;
  tags: string;

  constructor() { }

  setMetadata(metadata: any) {
    this.author = metadata['author'];
    this.date = metadata['date'];
    this.description = metadata['description'];
    this.image = metadata['image'];
    this.publisher = metadata['publisher'];
    this.title = metadata['title'];
    this.url = metadata['url'];
  }
}
