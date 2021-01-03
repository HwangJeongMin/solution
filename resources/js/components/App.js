import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./views/layouts/Header";
import Dashboard from "./views/content/Dashboard";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex"
    }
}));

const App = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className={classes.root}>
                <Header />
                <Dashboard />
            </div>
        </React.Fragment>
    );
};

export default App;
