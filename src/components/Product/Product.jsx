import "./styles.css";

function Product({ name, price }) {
  return (
    <div className={`product-card ${name.toLowerCase()}`}>
      <h3>{name}</h3>
      <p>Price: ${price}</p>
    </div>
  );
}

export default Product;
