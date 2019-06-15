const DESCRIPTIONS = [
  'The best trip to %s.',
  'Best vacations in %s.',
  '%s is the best place on the world!',
  'One of the best hotels in %s.'
];

export class Trip {

  id: string;
  price: number;
  description: string;

  constructor(target: string) {
    this.id = String(Math.random());
    this.price = Math.random() * 500 + 200;
    this.description = Trip.parseDescription(target);
  }

  static parseDescription(target: string) {
    const max = DESCRIPTIONS.length;
    const randomIndex = Math.floor(Math.random() * max);
    const description = DESCRIPTIONS[randomIndex];

    if (description) {
      return description.replace('%s', target);
    }
    return target;
  }
}
