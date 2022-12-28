import React, { useRef, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { CiRead, CiUnread } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from '../../../public/images/logo2.png';
import Social from '../../components/Social';
import auth from '../../firebase.init';

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const handleSignUp =async (e)=>{
        e.preventDefault();
        if(passwordRef.current.value !== confirmPasswordRef.current.value){
            toast.warn('Password not match', {position: toast.POSITION.TOP_CENTER})
            return;
        }
        await createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value);
        await updateProfile({displayName: nameRef.current.value})
    }
    if(loading){
        toast.loading('Please wite...')
    }
    if(user){
        toast.success('Successfully signed in')
    }
    if(error){
        toast.error('Something went wrong')
    }
    return (
        <div className=' h-[90vh] flex flex-col justify-center items-center '>
            <img className='w-[250px] mb-12' src={logo} alt="" />
            <form onSubmit={handleSignUp} className='w-[95%] sm:w-[50%] md:w-[40%] lg:w-[24%]' action="">
                <input ref={nameRef} className='w-full border-none py-2 px-3 bg-zinc-100 text-lg h-12 mb-5 rounded-sm text-slate-700 outline-none' type="text" name='name' placeholder='Name' required/>
                <input ref={emailRef} className='w-full border-none py-2 px-3 bg-zinc-100 text-lg h-12 mb-5 rounded-sm text-slate-700 outline-none' type="email" name='email' placeholder='Email' required/>
                <div className='relative'>
                <input ref={passwordRef} className='w-full border-none py-2 px-3 bg-zinc-100 text-lg h-12 mb-5 rounded-sm text-slate-700 outline-none' type={showPassword ? 'text' : 'password'} name='password'  placeholder='Passowrd' required/>
                <span onClick={()=> setShowPassword(!showPassword)} className='absolute cursor-pointer right-2 top-3'>
                    {showPassword ? <CiUnread/> : <CiRead/>}
                </span>
                </div>
                <div className='relative'>
                <input ref={confirmPasswordRef} className='w-full border-none py-2 px-3 bg-zinc-100 text-lg h-12 mb-5 rounded-sm text-slate-700 outline-none' type={showPassword ? 'text' : 'password'} name='confirm-password' placeholder='Confirm password' required/>
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