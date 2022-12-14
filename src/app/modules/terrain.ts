export class Terrain {
  public id: number;
  public nom: String;
  public prix: Number;
  public adresse: String;
  public photo: String;
  public type: String;

  constructor(_id: number, _nom: String, _prix: Number, _adresse: String, _photo:String, _type:String) {
    this.id = _id;
    this.nom = _nom;
    this.prix = _prix;
    this.adresse = _adresse;
    this.photo = _photo;
    this.type = _type;
  }
}
