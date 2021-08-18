import { FC } from "react";
const LoadingScreen: FC = () => {
    return (
        <div className="loading-screen">
            <div className="spinner-grow" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default LoadingScreen
