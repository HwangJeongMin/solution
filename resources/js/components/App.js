import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./views/layouts/Header";
import Content from "./views/layouts/Content";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex"
    }
}));

const App = () => {
    const classes = useStyles();
    const [FathName, setFathName] = React.useState("");
    const pathnameHandler = value => {
        setFathName(value);
    };
    return (
        <React.Fragment>
            <Router>
                <div className={classes.root}>
                    <Header fathName={FathName} />
                    <Content changePathname={pathnameHandler} />
                </div>
            </Router>
        </React.Fragment>
    );
};

export default App;
