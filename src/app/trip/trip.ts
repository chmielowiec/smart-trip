export class Trip {

  id: string;
  price: number;

  constructor() {
    this.id = String(Math.random());
    this.price = Math.random() * 500 + 200;
  }
}
