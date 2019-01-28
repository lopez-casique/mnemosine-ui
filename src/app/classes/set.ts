export class SetMuseum {
  public idSet: number;
  public title: string;
  public idCommunity: number;
  public description: string;
  public deleted: number;
  public created_at: string;
  public updated_at: string;

  constructor(title: string) {
    this.title = title;
  }
}
