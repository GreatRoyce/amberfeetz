import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/design/${product.referenceCode}`}>
      <div
        className=" mx-auto
            h-[320px]
            w-full
            max-w-72"
      >
        <img
          src={product.images[0].url}
          alt={product.images[0].alt}
          className="h-full w-full object-contain "
        />

        <h3>{product.name}</h3>

        <p>{product.referenceCode}</p>
        <p>₦{product.price.toLocaleString()}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
