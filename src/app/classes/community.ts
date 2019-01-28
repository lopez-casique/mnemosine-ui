export class Community {
  public name: string;
  public idSet: number;
  public description: string;
  public deleted: number;
  public created_at: string;
  public updated_at: string;

  constructor(name: string) {
    this.name = name;
  }
}
