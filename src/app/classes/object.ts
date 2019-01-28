export class ObjectMuseum {
  public idObject: number;
  public inventory_number: string;
  public origin_number: string;
  public catalog_number: string;
  public appraisal: number;
  public origin_description: number;
  public date_of_entry: number;
  public collection_idCollection: number;
  public subCollection_idSubCollection: number | null;
  public type_object: number;
  public location_object: number;
  public deleted: number;
  public created_at: string;
  public updated_at: string;

  constructor(origin_number: string, catalog_number: string,
              inventory_number: string) {
    this.origin_number = origin_number;
    this.catalog_number = catalog_number;
    this.inventory_number = inventory_number;
  }
}
