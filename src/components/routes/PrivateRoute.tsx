import { FC, useState } from 'react'
import { Route, Redirect, RouteProps } from "react-router-dom"


interface Props extends RouteProps {
    component: any;
}

const PrivateRoute: FC<Props> = ({ component: Component, ...rest }) => {
    const [authenticated, setAuthenticated] = useState<boolean>(false);

    return (
        <Route {...rest} render={props => authenticated ? <Component {...props} /> : <Redirect to="/Login" />} />
    )

}

export default PrivateRoute
