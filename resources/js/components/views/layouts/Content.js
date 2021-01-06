import React, { useEffect } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import routes from "../../config/pathRoute";

function Content(props) {
    useEffect(() => {
        props.changePathname(props.location.pathname);
    }, [props.location.pathname]);
    // console.log(routes);
    return (
        <React.Fragment>
            <Switch>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        exact={route.exact}
                        path={route.path}
                        component={route.component}
                    />
                ))}
            </Switch>
        </React.Fragment>
    );
}

export default withRouter(Content);
