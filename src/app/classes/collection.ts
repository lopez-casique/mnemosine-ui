export class Collection {
  public name: string;
  public director: string;
  public address: string;
  public deleted: number;
  public created_at: string;
  public updated_at: string;

  constructor(name: string) {
    this.name = name;
  }
}
