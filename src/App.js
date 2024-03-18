// import React, {useState} from 'react';
// import Routes from "./routes";
// import Login from './login';

// function App(props) {
    
    
//     return (
//         <div>
//             <Routes/>
//         </div>
//     );
// }

// export default App;


import {Routes, Route, useLocation} from "react-router-dom";
import Ilmiy_daraja from "./pages/ilmiy_daraja";
import React, { useState, useEffect } from 'react';
import Login from "./login"
import MainPage from "./components/Layout"
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";


function App(props) {



    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("")

    const navigate = useNavigate()


    const checkLogin = (e) => {
        e.preventDefault()
        if (login === "admin" && password === "1234" ){
            navigate("/cabinet")
        }else {
            toast("Login yoki parol xato", {
                position: "top-right",
                autoClose: 3000,
                theme: "dark"
            })
        }
    }

    const location = useLocation()
    console.log(location)
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const loggedIn = localStorage.getItem('isLoggedIn');
        if (loggedIn === 'true') {
            setIsLoggedIn(true);
        }
    }, []);
    return (
        <div>
                        {location.pathname.substring(0,8) !== "/cabinet" ?  <Login/> : ""}

               {/* {isLoggedIn ? <MainPage setIsLoggedIn={setIsLoggedIn} /> : <Login setIsLoggedIn={setIsLoggedIn} /> } */}
            <Routes>
                
                {/* <Route path={"/"} element={<Login/>}> */}
                    <Route path={"/login"} element={<Login/>}/>
                   
                    <Route path={"/cabinet"} element={<MainPage/>}>
                {/* </Route> */}
                    <Route path={"/cabinet/kurslar"} element={<Ilmiy_daraja/>}/>
                    </Route>
            </Routes>
        </div>
    );
}

export default App;