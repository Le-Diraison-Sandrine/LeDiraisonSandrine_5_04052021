// Représentation du format d'un produit :

class Furniture{
	constructor(jsonFurniture){
		jsonFurniture && Object.assign(this, jsonFurniture);
	}
}