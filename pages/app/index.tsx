import * as React from "react";
import type {NextPage} from "next";

import AppNavBar from "../../components/app/AppNavBar";
import AppSidebar from "../../components/app/AppSidebar";

const App: NextPage = () => {
    return (
        <>
            <AppNavBar/>
            <AppSidebar/>
        </>
    )
}

export default App
