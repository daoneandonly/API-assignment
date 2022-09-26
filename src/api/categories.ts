export function getAllCategories() {
  return fetch('https://fakestoreapi.com/products/categories')
    .then(res => res.json())
}
