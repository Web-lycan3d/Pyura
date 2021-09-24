import React , {useState} from 'react'
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@material-ui/core";
import { MdExpandLess } from "react-icons/md";
import { motion } from "framer-motion";
import OrderPreview from './OrderPreview/OrderPreview.component';

import './OrderOverview.styles.scss'

const OrderOverview = () => {
    const [status, setStatus] = useState("");
    return (
        <motion.div layout className="dropdown-container">
            <div className="dropdown-contents">
                <Accordion className="dropdown-accord">
                    <AccordionSummary expandIcon={<MdExpandLess />}>
                        <div className="dropdown-details">
                            <div className="dropdown-details-left">
                                <h1>Abhishek Kumar</h1>
                                <div className="dropdown-details-left-user">
                                    <span>Phone No.: 8789999637 </span>
                                </div>
                            </div>
                            <div className="dropdown-details-right">
                                <form>
                                    <input type="hidden" value="" name="orderid" />
                                    <label htmlFor="orderstatus">Order Status</label>
                                    <select
                                        name="orderstatus"
                                        className="select-option"
                                        onChange={(e) => setStatus(e.target.value)}>
                                        <option
                                            value="Order Processing">
                                            Order Processing
                                        </option>
                                        <option
                                            value="In Transit">
                                            In Transit
                                        </option>
                                        <option
                                            value="Delivered">
                                            Delivered
                                        </option>
                                        <option
                                            value="Cancelled">
                                            Cancelled
                                        </option>
                                    </select>
                                    <button type="submit">Submit</button>{" "}
                                </form>
                            </div>
                        </div>

                    </AccordionSummary>
                    <AccordionDetails>
                        <motion.div layout className="items-orderd-flex">
                            <OrderPreview/>
                        </motion.div>
                    </AccordionDetails>
                </Accordion>
            </div>
        </motion.div>
    )
}

export default OrderOverview
