// import React, { useState } from 'react';

// const Login = ({ setIsLoggedIn }) => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const handleLogin = () => {
//         if (username === 'sardorabdullayev412@gmail.com' && password === '1234') {
//             localStorage.setItem('isLoggedIn', 'true');
//             setIsLoggedIn(true);
//         } else {
//             alert('Login yoki parol noto‘g‘ri');
//         }
//     };


//     return (
//         <div>

//             <input type="text" placeholder="Foydalanuvchi nomi" value={username} onChange={(e) => setUsername(e.target.value)} />
//             <input type="password" placeholder="Parol" value={password} onChange={(e) => setPassword(e.target.value)} />
//             <button onClick={handleLogin}>Kirish</button>
//         </div>
//     );
// };

// export default Login;



import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

function Login(props) {
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

    return (
        <div className={"row"}>
            <div className="col-md-4 offset-4">
                <div className="card">
                    <div className="card-body">
                        <form id={"form"}>
                            <input value={login} onChange={(e) => setLogin(e.target.value)}
                                   className={"form-control my-2"} type="text" placeholder={"Login"}/>
                            <input value={password} onChange={(e) => setPassword(e.target.value)}
                                   className={"form-control my-2"} type="password" placeholder={"Password"}/>
                        </form>
                    </div>
                    <div className="card-footer">
                        <button onClick={checkLogin} form={"form"} className={"btn btn-dark w-100"}> Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;