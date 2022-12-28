import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../firebase.init';


const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if(error){
     toast.error('Something went wrong')
    }
    if(user){
        toast.success('Successfully signed in')
    }

    return (
        <div>
            <button onClick={()=>signInWithGoogle()} className='flex justify-center py-1 items-center bg-white w-[300px] border-2 mb-3 cursor-pointer'>
                <img className='w-[40px] h-[40px] mr-3' src="https://i.ibb.co/CKzXWPk/GOOG-0ed88f7c.png" alt="" />
                <h5>Google</h5>
            </button>
            <div className='flex items-center justify-center bg-white w-[300px] py-1 border-2 cursor-pointer'>
                <img className='w-[40px] h-[40px] mr-3' src="https://i.ibb.co/bRDrSRK/github-logo-icon-143772.png" alt="" />
                <h5>Github</h5>
            </div>
        </div>
    );
};

export default Social;