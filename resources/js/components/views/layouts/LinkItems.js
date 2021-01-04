import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles(theme => ({
    root: {
        background: "#dcdcdc"
    }
}));

const LinkItems = props => {
    const [Classes, setClasses] = useState({});
    const classes = useStyles();
    useEffect(() => {
        if (props.item.path === props.Pathname) {
            setClasses(classes);
        } else {
            setClasses({});
        }
    }, [props.Pathname]);
    return (
        <React.Fragment>
            <Link to={props.item.path}>
                <ListItem button classes={Classes}>
                    <ListItemIcon>{props.item.icon}</ListItemIcon>
                    <ListItemText primary={props.item.title} />
                </ListItem>
            </Link>
        </React.Fragment>
    );
};

export default LinkItems;
