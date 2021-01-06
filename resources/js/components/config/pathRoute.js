import React from "react";
import { Redirect } from "react-router";
import Dashboard from "../views/dashboard/Dashboard";
import Orders from "../views/content/Orders";
import Shop from "../views/content/Shop";
import Peristalsis from "../views/content/Peristalsis";

import ListOfUsers from "../views/basic/ListOfUsers";
import Category from "../views/goods/Category";
import ListOfGoods from "../views/goods/ListOfGoods";
import Warehouse from "../views/stock/Warehouse";
import Inventory from "../views/stock/Inventory";
import Axios from "axios";

const getUserList = () => {
    const request = Axios.get("/get-user-list", {
        params: { mode: "getUserList" }
    })
        .then(response => {
            // console.log(response);
            return { success: true, data: response.data };
        })
        .catch(error => {
            return { success: false, data: error };
        });

    return request;
};

const routes = [
    {
        path: "/",
        exact: true,
        component: () => <Redirect to="/basic/listOfUsers" />
    },
    {
        path: "/dashboard",
        component: () => <Dashboard />
    },
    {
        path: "/basic",
        exact: true,
        component: () => <Redirect to="/basic/listOfUsers" />
    },
    {
        path: "/basic/listOfUsers",
        component: () => <ListOfUsers userList={getUserList} />
    },
    {
        path: "/goods",
        exact: true,
        component: () => <Redirect to="/goods/category" />
    },
    {
        path: "/goods/category",
        component: () => <Category />
    },
    {
        path: "/goods/listOfGoods",
        component: () => <ListOfGoods />
    },
    {
        path: "/stock",
        exact: true,
        component: () => <Redirect to="/stock/warehouse" />
    },
    {
        path: "/stock/warehouse",
        component: () => <Warehouse />
    },
    {
        path: "/stock/inventory",
        component: () => <Inventory />
    },
    {
        path: "/orders",
        component: () => <Orders />
    },
    {
        path: "/shop",
        component: () => <Shop />
    },
    {
        path: "/peristalsis",
        component: () => <Peristalsis />
    }
];

export default routes;
