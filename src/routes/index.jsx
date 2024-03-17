import React from 'react';
import {Routes, Route} from "react-router-dom";
import Ilmiy_daraja from "../pages/ilmiy_daraja";
import Layout from "../components/Layout";


function Index(props) {
    return (
        <div>
            <Routes>
                
                <Route path={"/"} element={<Layout/>}>
                   
                    <Route path={"/ilmiy_daraja"} element={<Ilmiy_daraja/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default Index;