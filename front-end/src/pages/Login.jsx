import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../hooks/useLogin'

export const Login = () => {
    
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    const {loading,login} = useLogin()

    const handleSubmit = async(e) => {
        e.preventDefault()
        await login(username,password)
    }

    return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
                Login
                <span className='text-blue-500'> ChatApp</span>
            </h1>
            <form onSubmit={handleSubmit}>
                <div className='mt-4'>
                    <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10' onChange={e=>setUsername(e.target.value)} />
                </div>
                <div className='mt-4'>
                    <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10' onChange={e=>setPassword(e.target.value)} />
                </div>

                <Link to="/signup" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                    Don't have an account?
                </Link>

                <div>
                    <button type='submit' className='btn btn-block btn-sm mt-2'>
                        Login
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}
