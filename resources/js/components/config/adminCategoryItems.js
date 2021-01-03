import React from "react";
import { Link } from "react-router-dom";
import SettingIcon from "@material-ui/icons/Settings";
import Button from "@material-ui/core/Button";
import PeopleIcon from "@material-ui/icons/People";

const adminCategoryItems = [
    {
        path: "/basicManagement",
        title: "기초 정보 관리",
        icon: <SettingIcon />
    },
    {
        path: "/goodsManagement",
        title: "상품 관리",
        icon: <SettingIcon />
    },
    {
        path: "/stockManagement",
        title: "재고 관리",
        icon: <SettingIcon />
    },
    {
        path: "/ordersManagement",
        title: "주문 관리",
        icon: <SettingIcon />
    },
    {
        path: "/shopManagement",
        title: "상점 관리",
        icon: <SettingIcon />
    },
    {
        path: "/peristalsisManagement",
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
