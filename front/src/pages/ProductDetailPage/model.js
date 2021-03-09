export default product => ({
  pictureURL: product.PictureURL,
  name: product.Name,
  brand: product.Brand,
  description: product.Description,
  price: product.Price,
  retailPrice: product['Retail Price'],
  isThereStock: !!product.Stock,
  color: product.Color,
  badges: product.Badges && product.Badges.split('|')
})