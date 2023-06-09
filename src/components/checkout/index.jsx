import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { load, save } from '../../utils/localStorage';
import { CartContext } from '../../components/cart/context/index';
import TotalSummery from './totalSummery';
import CartHistory from './cartHistory';
import { tax, shipping } from '../../components/cart/content/index';
import CheckoutEmpty from './checkoutEmpty';

function CheckOutHistory() {
    const { dispatch } = useContext(CartContext);
    const [cartHistory, setCartHistory] = useState([]);

    useEffect(() => {
        const historyCart = load("cartHistory") || [];
        setCartHistory(historyCart);
    }, []);

    useEffect(() => {
        if (cartHistory.length > 0) {
            dispatch({ type: "clearCart" });
            save("cartHistory", []);
        }
    }, [cartHistory, dispatch]);

    const total = cartHistory.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.price * currentItem.quantity;
    }, 0);

    const orderTotal = total + tax + shipping;

    return (
        <Container className="text-white mt-4">
            {cartHistory.length > 0 ? (
                <>
                    <div className='cart-history mt-4'>
                        <div className='cart-history-text'>
                            <CartHistory cartItems={cartHistory} />
                            <TotalSummery total={total} shipping={shipping} tax={tax} orderTotal={orderTotal} />
                        </div>
                    </div>
                </>
            ) : (
                <div className='mt4'>
                    <CheckoutEmpty />
                </div>
            )}
        </Container>
    )
}

export default CheckOutHistory;