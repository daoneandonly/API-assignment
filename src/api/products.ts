export function getAllProducts() {
  return fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
}

export function getProductsByCategory(category: string) {
  return fetch(`https://fakestoreapi.com/products/category/${category}`)
    .then(res => res.json())
}

export function getProduct(productId: number) {
  return fetch(`https://fakestoreapi.com/products/product/${productId}`)
    .then(res => res.json())
}