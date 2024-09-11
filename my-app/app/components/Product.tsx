interface Rating {
  rate: number;
  count: number;
}

interface Product {
  id: number;
  title: string;
  category: string;
  rating: Rating;
  price: number;
  description: string;
  image: string;
}
interface ProductProps {
  eachProduct: Product;
}
const Product = ({ eachProduct }: ProductProps) => {
  const { title, price, rating, description, category, image } = eachProduct;
  const { rate } = rating;
  return (
    <li className="w-[600px] border-l-[5px]  border-l border-[#1ca2bd] rounded-lg shadow-lg p-2 mr-8  mb-6 flex items-center">
        <div className="pl-1 mt-2 mr-5">
          <img src={image} alt={title} className="w-[200px] h-[200px]"/>
        </div>
      <div className="p-1">
        <h2 className="text-[17px] font-semibold mb-1">{title}</h2>
        <h3 className="text-[20px] text-blue-500 font-semibold mb-1">{rate}</h3>
        <span className="mb-1 line-through">
          ₹{Math.ceil(price * 83.98)}
        </span>
        <br />
        <span className="text-red-500 text-[22px] font-semibold mb-1">Deal Price : ₹{Math.ceil(price * 83.98) > 5000? Math.ceil(price * 83.98) - 999 : Math.ceil(price * 83.98) < 1000 ? Math.ceil(price * 83.98) - 120 : Math.ceil(price * 83.98)}</span>
        <p className="text-[14px] font-semibold mb-1">{category.toUpperCase()}</p>
      </div>
    </li>
  );
};
export default Product;
