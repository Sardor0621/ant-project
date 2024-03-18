// import {Routes, Route, useLocation} from "react-router-dom";
// import Ilmiy_daraja from "../pages/ilmiy_daraja";
// import React, { useState, useEffect } from 'react';
// import Login from "../login"
// import MainPage from "../components/Layout"


// function Index(props) {

//     const location = useLocation()
//     console.log(location)
//     const [isLoggedIn, setIsLoggedIn] = useState(false);

//     useEffect(() => {
//         const loggedIn = localStorage.getItem('isLoggedIn');
//         if (loggedIn === 'true') {
//             setIsLoggedIn(true);
//         }
//     }, []);
//     return (
//         <div>

//                {isLoggedIn ? <MainPage setIsLoggedIn={setIsLoggedIn} /> : <Login setIsLoggedIn={setIsLoggedIn} /> }
//             <Routes>
                
//                 <Route path={"/"} element={<Login/>}/>
                   
//                     <Route path={"/cabinet"} element={<MainPage/>}>
                
//                     <Route path={"/cabinet/kurslar"} element={<Ilmiy_daraja/>}/>
//                     </Route>
//             </Routes>
//         </div>
//     );
// }

// export default Index;