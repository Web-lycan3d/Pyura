import React, { Fragment, useState } from 'react'
import { motion } from "framer-motion";
import OrderOverview from '../../components/AdminDashboard/OrderOverview.component';

import './admin.styles.scss'

const AdminPanel = () => {
    const [option, setOption] = useState(null);
    return (
        <Fragment>
            <div className="admin-dashboard-container">
                {" "}
                {/* {alertState ? (<Alert severity="success">
                    <AlertTitle>Success</AlertTitle>
                    Updated the documents
                </Alert>) : ""} */}
                <div className="admin-dsahboard-header">
                    <div className="admin-dashboard-heading">
                        <h1>Admin Panel</h1>{" "}
                    </div>

                    <div className="admin-dashboard-nav">
                        <span
                            onClick={() => setOption(true)}
                            className={
                                option
                                    ? "admin-dashboard-navlist active"
                                    : "admin-dashboard-navlist"
                            }>
                            New Orders
                        </span>
                        <span
                            onClick={() => setOption(false)}
                            className={
                                option
                                    ? "admin-dashboard-navlist"
                                    : "admin-dashboard-navlist active"
                            }>
                            Orders
                        </span>
                    </div>
                </div>
                <motion.div layout className="admin-dashboard-content">
                    <OrderOverview />
                </motion.div>
            </div>
        </Fragment>
    )
}

export default AdminPanel
