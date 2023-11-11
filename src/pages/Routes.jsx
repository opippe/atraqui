import { createMemoryRouter, Route, RouterProvider } from 'react-router-dom'
import App from '../App.jsx'
import Login from './Login/Login.jsx'
import FilaDeAtracacao from './Atraqui/Atraqui.jsx'
import Atraqui from './Atraqui/Atraqui.jsx'

function Routes() {
    return(
        createMemoryRouter([
            {
                path: "/",
                element: <App />,
                children: [
                    {
                        path: "/",
                        element: <Login />
                    },
                    {
                        path: "atraqui",
                        element: <Atraqui />
                    }
                ]
            }
        ])
    )
}

export default Routes