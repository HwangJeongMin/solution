import React from "react";
import SettingIcon from "@material-ui/icons/Settings";
import Button from "@material-ui/core/Button";
import PeopleIcon from "@material-ui/icons/People";

const adminCategoryItems = [
    { code: "basicManagement", title: "기초 정보 관리", icon: <SettingIcon /> },
    { code: "goodsManagement", title: "상품 관리", icon: <SettingIcon /> },
    { code: "stockManagement", title: "재고 관리", icon: <SettingIcon /> },
    { code: "ordersManagement", title: "주문 관리", icon: <SettingIcon /> },
    { code: "shopManagement", title: "상점 관리", icon: <SettingIcon /> },
    { code: "peristalsisManagement", title: "연동 관리", icon: <SettingIcon /> }
];

export { adminCategoryItems };

const AdminCategory = () => {
    return (
        <React.Fragment>
            {adminCategoryItems.map((item, index) => (
                <Button variant="contained" key={index}>
                    {item.title}
                </Button>
            ))}
        </React.Fragment>
    );
};

export default AdminCategory;
