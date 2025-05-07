import React, {useEffect, useState} from 'react';
import Navbar from '../organism/Navbar.jsx';
import LoginForm from '../molecules/LoginForm.jsx';
import axios from 'axios'

function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin2 = () => {
        setIsLoggedIn(true);
    };


    const [products, setProduct] = useState([]);

    const API_URL = import.meta.env.VITE_API_BASE_URL;
    
    useEffect(() => {
        fetch(`${API_URL}/api/missionadvance1/user`)
        .then((response) => response.json ())
        .then((data) => {
            console.log(data)
        })
    })

    useEffect(() => {
        axios.get(`${API_URL}/api/missionadvance1/user`)
        .then((response) => {
            console.log(response.data);
            setProduct(response.data);
        })
        .catch((error) => {
            console.error('Error', error)
        })
    }, [API_URL]);

    

    return (
        <>
        <main className='m-0 p-0 flex flex-col bg-baseBackground min-h-screen'>
            <Navbar isLoggedIn={false} />
            {!isLoggedIn ? (
            <section className='flex container m-auto py-32 lg:py-0 px-4'>
                <LoginForm onLogin={handleLogin2} />
            </section>
            ) : null
        }
        </main>
        </>
    )
}

export default Login