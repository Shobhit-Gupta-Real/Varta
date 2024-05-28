import {render} from "@testing-library/react"
import {StaticRouter} from "react-router-dom/server"

import Login from "../pages/Login"
test("This is the login Component", ()=>{
    const login = render(
        <StaticRouter>
            <Login/>
        </StaticRouter>
    )
    console.log(login)
})

