import { Link } from "react-router-dom"
import { useRecoilValue, useRecoilValueLoadable } from 'recoil'
import { toCurrencyFormat } from "../helpers/helpers"
import { CartItems, cartList, cartTotal } from '../store/cart'
import BreadCrumb from "./BreadCrumb"
import CartList from "./CartList"
import Confirm from "./Confirm"
import ProductViewLoad from "./ProductViewLoad"
import ProductsLoad from "./ProductsLoad"

const CartView = (): JSX.Element => {
  const cartLoadable = useRecoilValueLoadable<CartItems[]>(cartList)
  const cartItems: CartItems[] = 'hasValue' === cartLoadable.state ? cartLoadable.contents : []
  const totalPrice = useRecoilValueLoadable(cartTotal).contents

  if ('loading' === cartLoadable.state) {
    return <ProductViewLoad />
  }

  return (
    <>
      <BreadCrumb category="홈" crumb="장바구니" />
      <div className="mt-6 md:mt-14 px-2 lg:px-0">
        {cartItems.length <= 0 && (
          <div>
            <h1 className="text-2x1">장바구니에 없습니다.</h1>
            <Link to='/' className="btn btn-primary mt-10">
              담으러 가기
            </Link>
          </div>
        )}
      </div>
      <div className="lg:lex justify-between mb-20">
        <div>
          {0 < cartItems.length
            ? cartItems.map((cart) => {
              const data: any = cart || {}
              return <CartList key={cart.id} data={data} />
            }) : ''}
        </div>
        <div className="self-satart shrink-0 flex items-center mt-10 mb-20">
          <span className="text-x1 md:text-2x1">총 : {toCurrencyFormat(totalPrice)}</span>
          <label htmlFor="confrim-modal" className="modal-button btn btn-primary ml-5">
            구매하기
          </label>
        </div>
      </div>
      <Confirm />
    </>
  )
}

export default CartView