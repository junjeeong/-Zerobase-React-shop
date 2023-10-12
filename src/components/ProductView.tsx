import { toCurrencyFormat } from "../helpers/helpers";
import { addToCart } from "../store/cart";
import Products from "../views/Products";
import BreadCrumb from "./BreadCrumb";
import ProductsList from "./ProductList";
import ProductsLoad from "./ProductsLoad";
import ProductViewLoad from "./ProductViewLoad";
import Rating from "./Rating";


const ProductView = (): JSX.Element => {
    if ('loading' === ProductsLoadable.state) {
        return <ProductsViewLoad />
    }

    return (
        <div>
            <BreadCrumb category={product.category} crumb={product.title} />
            <div className="lg:flex lg:items-center mt-6 md:mt-14 px-2 lg:px-0">
                <figure className="flex-shrink-0 rounded-2x1 overflow-hidden px-4 py-4 bg-white view_image">
                    <img src={product.image} alt={product.title} className="object-contain w-full h-72" />
                </figure>
                <div className="card-body px-1 lg:px-12">
                    <h2 className="card-title">
                        {product.title}
                        <span className="badge badge-accent ml-2">NEW</span>
                    </h2>
                    <p>{product.description}</p>
                    <Rating rate={product?.rating?.rate} count={product?.rating?.count} />
                    <p className="mt-2 mb-4 text-3x1">{toCurrencyFormat(poduct.price)</p>
                    <div className="card-action">
                        <button className="btn btn-primary" onClick={() => addToCartHandler(product.id)}>
                            장바구니에 담기
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default ProductView