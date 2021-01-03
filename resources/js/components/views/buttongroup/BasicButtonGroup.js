import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > *": {
            margin: theme.spacing(1)
        }
    }
}));

export default function BasicButtonGroup(props) {
    const classes = useStyles();
    const menuItems = props.menuItems;
    return (
        <React.Fragment>
            <div className={classes.root}>
                {/* <ButtonGroup
                color="primary"
                aria-label="outlined primary button group"
            >
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup> */}
                <ButtonGroup
                    variant="contained"
                    aria-label="contained primary button group"
                >
                    {menuItems.map((item, index) => (
                        <Button key={index}>{item.title}</Button>
                    ))}
                </ButtonGroup>
                {/* <ButtonGroup
                variant="text"
                color="primary"
                aria-label="text primary button group"
            >
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup> */}
            </div>
        </React.Fragment>
    );
}
