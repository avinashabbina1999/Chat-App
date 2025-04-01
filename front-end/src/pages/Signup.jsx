import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useSignup from '../hooks/useSignup'

const Signup = () => {

  const [input,setInput] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: ''
  })

  const {loading,signup} = useSignup()

  const handleSubmit = async(e) => {
    e.preventDefault()
    await signup(input)
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
                Signup
                <span className='text-blue-500'> ChatApp</span>
            </h1>

            <form onSubmit={handleSubmit}>
                <div className='mt-4'>
                    <input type="text" placeholder='Enter fullname' className='w-full input input-bordered h-10' value={input.fullName} onChange={e=>setInput({...input,fullName:e.target.value})} />
                </div>
                <div className='mt-4'>
                    <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10' value={input.username} onChange={e=>setInput({...input,username:e.target.value})} />
                </div>
                <div className='mt-4'>
                    <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10' value={input.password} onChange={e=>setInput({...input,password:e.target.value})} />
                </div>
                <div className='mt-4'>
                    <input type="password" placeholder='Confirm password' className='w-full input input-bordered h-10' value={input.confirmPassword} onChange={e=>setInput({...input,confirmPassword:e.target.value})} />
                </div>
                
                <div className='flex'>
                    <div className='form-control'>
                        <label className='label gap-2 cursor-pointer'>
                            <span className='label-text text-white'>male</span>
                            <input type="radio" name="gender" value="male" className='checkbox border-slate-900' onChange={(e) => setInput({ ...input, gender: e.target.value })} checked={input.gender === 'male'} />
                        </label>
                    </div>
                    <div className='form-control'>
                        <label className='label gap-2 cursor-pointer'>
                            <span className='label-text text-white'>female</span>
                            <input type="radio" name="gender" value="female" className='checkbox border-slate-900' onChange={(e) => setInput({ ...input, gender: e.target.value })} checked={input.gender === 'female'} />
                        </label>
                    </div>
                </div>


                <Link to="/login" className='text-sm hover:underline hover:text-blue-600 mt-1 inline-block'>
                    Already have an account?
                </Link>

                <div>
                    <button className='btn btn-block btn-sm mt-2'>
                        Signup
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Signup