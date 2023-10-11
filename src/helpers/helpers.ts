import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const currencyFormat = new Intl.NumberFormat('en-Us', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
})

export const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])
    return null
}

export const toCurrencyFormat = (value: number) => currencyFormat.format(value)