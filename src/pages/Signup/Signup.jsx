import React, { useState } from 'react';
import { CiRead, CiUnread } from "react-icons/ci";
import { Link } from 'react-router-dom';
import logo from '../../../public/images/logo2.png';
import Social from '../../components/Social';

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <div className=' h-[90vh] flex flex-col justify-center items-center '>
            <img className='w-[250px] mb-12' src={logo} alt="" />
            <form className='w-[95%] sm:w-[50%] md:w-[40%] lg:w-[24%]' action="">
                <input className='w-full border-none py-2 px-3 bg-zinc-100 text-lg h-12 mb-5 rounded-sm text-slate-700 outline-none' type="text" name='name' placeholder='Name'/>
                <input className='w-full border-none py-2 px-3 bg-zinc-100 text-lg h-12 mb-5 rounded-sm text-slate-700 outline-none' type="email" name='email' placeholder='Email'/>
                <div className='relative'>
                <input className='w-full border-none py-2 px-3 bg-zinc-100 text-lg h-12 mb-5 rounded-sm text-slate-700 outline-none' type={showPassword ? 'text' : 'password'} name='password' placeholder='Passowrd'/>
                <span onClick={()=> setShowPassword(!showPassword)} className='absolute cursor-pointer right-2 top-3'>
                    {showPassword ? <CiUnread/> : <CiRead/>}
                </span>
                </div>
                <div className='relative'>
                <input className='w-full border-none py-2 px-3 bg-zinc-100 text-lg h-12 mb-5 rounded-sm text-slate-700 outline-none' type={showPassword ? 'text' : 'password'} name='confirm-password' placeholder='Confirm password'/>
                <span onClick={()=> setShowPassword(!showPassword)} className='absolute cursor-pointer right-2 top-3'>
                    {showPassword ? <CiUnread/> : <CiRead/>}
                </span>
                </div>
                <input className='w-full border-none py-2 px-3 bg-red-500 text-lg h-12 mb-5 rounded-sm text-white outline-none cursor-pointer' type="submit" value='Sign Up' id="" />
            </form>
            <Link to='/login' className='text-sm text-red-600'>Already have an account?</Link>
            <div className='mt-4'>
            <Social/>
            </div>
        </div>
    );
};

export default Signup;