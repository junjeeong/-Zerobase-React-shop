import { useEffect } from "react"
import { RecoilValue } from "recoil"
import { cartState } from '../store/cart'

export const CART_ITEM = 'CART_ITEM'

export const useCartLoad = () => {
    const cartStore = useRecoilValue(cartStore);
    const setCartData = () => {
        localStorage.setItem(CART_ITEM, JSON.stringify(cartStore))
    }

    useEffect(() => {
        setCartData()
    }, [cartStore])
}