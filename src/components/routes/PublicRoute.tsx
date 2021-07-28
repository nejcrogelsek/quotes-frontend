import { FC, useState } from 'react'
import { Route, Redirect, RouteProps } from "react-router-dom"

interface Props extends RouteProps {
    component: any;
}

const PublicRoute: FC<Props> = ({ component: Component, ...rest }) => {
    const [authenticated, setAuthenticated] = useState<boolean>(false);
    return (
        <Route {...rest} render={props => !authenticated ? <Component {...props} /> : <Redirect to='/me' />} />
    )

}

export default PublicRoute
