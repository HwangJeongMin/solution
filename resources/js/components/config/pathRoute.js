import React from "react";
import { Redirect } from "react-router";
import Dashboard from "../views/content/Dashboard";
import BasicManagement from "../views/content/BasicManagement";
import GoodsManagement from "../views/content/GoodsManagement";
import StockManagement from "../views/content/StockManagement";
import OrdersManagement from "../views/content/OrdersManagement";
import ShopManagement from "../views/content/ShopManagement";
import PeristalsisManagement from "../views/content/PeristalsisManagement";

const routes = [
    {
        path: "/",
        exact: true,
        component: () => <Redirect to="/dashboard" />
    },
    {
        path: "/dashboard",
        component: () => <Dashboard />
    },
    {
        path: "/basicManagement",
        component: () => <BasicManagement />
    },
    {
        path: "/goodsManagement",
        component: () => <GoodsManagement />
    },
    {
        path: "/stockManagement",
        component: () => <StockManagement />
    },
    {
        path: "/ordersManagement",
        component: () => <OrdersManagement />
    },
    {
        path: "/shopManagement",
        component: () => <ShopManagement />
    },
    {
        path: "/peristalsisManagement",
        component: () => <PeristalsisManagement />
    }
];

export default routes;
