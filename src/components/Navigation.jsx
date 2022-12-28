import React, { useState } from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { CiIndent } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from '../../public/images/logo2.png';
import auth from '../firebase.init';



const Navigation = () => {
    const [toggle, setToggle] = useState(false);
    const [user, loading, error] = useAuthState(auth);
    const [signOut] = useSignOut(auth);
    window.addEventListener('scroll', function(){
        const nav_bar = document.querySelector('.navigation');
        nav_bar.classList.toggle('active-nav', window.scrollY > 50)
    })
    const handleSignOut = async ()=>{
        const success = await signOut()
        if(success){
            toast.success('Successfully signed out')
        }else{
            toast.error('Something went wrong')
        }
    }
    return (
        <>
            <nav className={`flex justify-between items-center px-5 sm:px-8 lg:px-20 py-3 border-b-2 navigation z-[100]`}>
                <div>
                    <Link to='/'><img className='w-[150px]' src={logo} alt="" /></Link>
                </div>
                <div className={`flex items-center md:flex-row md:items-center md:space-x-8 font-semibold md:block md:shadow-none md:border-none md:relative md:p-[0]  ${toggle ? 'fixed top-[10%] bg-white py-6 px-5 flex-col  space-y-3 shadow-xl space-x-0 w-[60%] border-2 left-[50%] transform translate-x-[-50%] text-center' : 'hidden'}`}>
                    <Link to='/cart'>Cart</Link>
                    {user && <Link>Account</Link>}
                    <Link to='/login'>Login</Link>
                   <Link to='/signup' className='bg-[red] text-white px-3 py-2 rounded-[20px] hover:bg-red-400'>Sign up</Link>
                    {user && <Link onClick={handleSignOut}>Log out</Link>}
                </div>
                <div onClick={()=> setToggle(!toggle)} className='md:hidden w-11 h-11 active:bg-red-300 flex items-center rounded-full p-1'>
                    <CiIndent className='w-full text-3xl'/>
                </div>
            </nav>
        </>
    );
};

export default Navigation;