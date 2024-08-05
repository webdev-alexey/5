import ProductsModel from "./products/model.js";

const productsModel = new ProductsModel();

console.log(productsModel);

async function getAndRenderProducts() {
  await productsModel.loadProducts();
  console.log(productsModel);
}

getAndRenderProducts();
