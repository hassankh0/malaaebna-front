export class Terrain {
  public id: String;
  public nom: String;
  public prix: Number;
  public adresse: String;

  constructor(_id: String, _nom: String, _prix: Number, _adresse: String) {
    this.id = _id;
    this.nom = _nom;
    this.prix = _prix;
    this.adresse = _adresse;

  }
}
