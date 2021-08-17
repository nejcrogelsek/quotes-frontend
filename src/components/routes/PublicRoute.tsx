import { FC, useContext } from 'react'
import { Route, Redirect, RouteProps } from "react-router-dom"
import { UserContext } from '../../stores/user.context'

interface Props extends RouteProps {
    component: any;
}

const PublicRoute: FC<Props> = ({ component: Component, ...rest }) => {
    const { userValue } = useContext(UserContext)
    return (
        <Route {...rest} render={props => !userValue ? <Component {...props} /> : <Redirect to='/me' />} />
    )

}

export default PublicRoute
