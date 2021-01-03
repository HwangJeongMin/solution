import React from "react";
import { Link } from "react-router-dom";
import SettingIcon from "@material-ui/icons/Settings";
import Button from "@material-ui/core/Button";
import PeopleIcon from "@material-ui/icons/People";
import CategoryIcon from "@material-ui/icons/Category";
import ComputerIcon from "@material-ui/icons/Computer";
import HouseSharpIcon from "@material-ui/icons/HouseSharp";
import InboxIcon from "@material-ui/icons/Inbox";

const adminCategoryItems = [
    {
        path: "/basic",
        title: "기초 정보 관리",
        icon: <SettingIcon />,
        subCategory: [
            {
                path: "/basic/listOfUsers",
                title: "사용자 관리",
                icon: <PeopleIcon />
            }
        ]
    },
    {
        path: "/goods",
        title: "상품 관리",
        icon: <SettingIcon />,
        subCategory: [
            {
                path: "/goods/category",
                title: "카테고리 관리",
                icon: <CategoryIcon />
            },
            {
                path: "/goods/listOfGoods",
                title: "상품 관리",
                icon: <ComputerIcon />
            }
        ]
    },
    {
        path: "/stock",
        title: "재고 관리",
        icon: <SettingIcon />,
        subCategory: [
            {
                path: "/stock/warehouse",
                title: "창고 관리",
                icon: <HouseSharpIcon />
            },
            {
                path: "/stock/inventory",
                title: "재고 목록",
                icon: <InboxIcon />
            }
        ]
    },
    {
        path: "/orders",
        title: "주문 관리",
        icon: <SettingIcon />
    },
    {
        path: "/shop",
        title: "상점 관리",
        icon: <SettingIcon />
    },
    {
        path: "/peristalsis",
        title: "연동 관리",
        icon: <SettingIcon />
    }
];

export { adminCategoryItems };

const AdminCategory = () => {
    return (
        <React.Fragment>
            {adminCategoryItems.map((item, index) => (
                <Link to={item.path} key={index}>
                    <Button variant="contained">
                        {item.icon}&nbsp;&nbsp;{item.title}
                    </Button>
                </Link>
            ))}
        </React.Fragment>
    );
};

export default AdminCategory;
