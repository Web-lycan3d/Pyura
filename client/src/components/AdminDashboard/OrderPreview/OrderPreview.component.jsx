import React from 'react'

import './OrderPreview.styles.scss'

const OrderPreview = () => {
    return (
        <>
            <div className="dropdown-flow">
                <div className="details-address">
                    <p>
                        Order Id:  10278377363
                    </p>
                    <p>
                        Email : singh004saab@gmail.com
                    </p>
                    <p>
                        Phone no: 8789999637
                    </p>
                </div>
                <div className="dropdown-flow-left">
                    <div className="items-orderd-list">
                        <span></span>
                    </div>
                    <div className="items-orderd-address">
                        <span>Mandir Path , Kadma , Jamshedpur , Jharkhand- 83105</span>
                        <span>Order Date : 12/12/2012</span>
                    </div>
                </div>
                <div className="dropdown-flow-right">
                    <div className="chechout-header-right">
                        <h5>Pyura Air</h5>
                        <p>
                            <sub>Rs 6999/unit</sub> NAN
                        </p>
                    </div>
                    <div className="checkout-total">
                        <div className="checkout-total-1">
                            <p>Sub Total</p>
                            <span>Rs 6999</span>
                        </div>
                        <div className="checkout-total-1">
                            <p>Shipping</p>
                            <span>Rs 150</span>
                        </div>
                        <div className="checkout-total-1">
                            <p>Discount</p>
                            <span>Rs 1000</span>
                        </div>
                    </div>
                    <div className="checkout-total-main">
                        <h5>
                            Total <sub>Inclusive of GST</sub>{" "}
                        </h5>
                        <span>Rs 5849</span>
                    </div>
                </div>
            </div>{" "}
        </>
    )
}

export default OrderPreview
