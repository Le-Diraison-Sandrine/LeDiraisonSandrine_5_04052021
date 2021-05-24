// Appel de l'API :

fetch("http://localhost:3000/api/furniture")
  .then(response => response.json())
  .then(data => {
    console.log(data);

    // Boucle pour afficher les produits et création de la structure Html du DOM :

    for (let jsonFurniture of data) {
      let furniture = new Furniture(jsonFurniture);
      document.querySelector("#content").innerHTML += `<div class="card-container">
                                                        <div class="card article">
                                                          <div class="card-header">
                                                            <h5 class="card-title d-flex justify-content-between">${furniture.name}</h5>
                                                          </div>
                                                          <img src="${furniture.imageUrl}" class="card-img-top" alt="${furniture.description}" width=400 height=400></br>
                                                          <p class="cardPrice">Prix : ${furniture.price / 100 + " €"}</p>
                                                          <div class="card-body">
                                                            <p class="card-text">${furniture.description}</p>
                                                          </div>
                                                          <a href="produit.html?id=${furniture._id}" class="content__btn">Voir cet article</a>
                                                        </div></br>
                                                      </div>`;
    }
  });