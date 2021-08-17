import { FC, useContext, useState } from 'react'
import { Route, Redirect, RouteProps } from "react-router-dom"
import { UserContext } from '../../stores/user.context'


interface Props extends RouteProps {
    component: any;
}

const PrivateRoute: FC<Props> = ({ component: Component, ...rest }) => {
    const { userValue, setUserValue } = useContext(UserContext)

    return (
        <Route {...rest} render={props => userValue ? <Component {...props} /> : <Redirect to='/login' />} />
    )

}

export default PrivateRoute
