export class Dimension {
  public idDimension: number;
  public height_with_base: number | null;
  public width_with_base: number | null;
  public depth_with_base: number | null;
  public diameter_with_base: number | null;
  public height: number;
  public width: number;
  public depth: number;
  public diameter: number;
  public idMeasure: number;
  public idObject: number;
  public deleted: number;
  public created_at: string;
  public updated_at: string;

  constructor() {}
}
