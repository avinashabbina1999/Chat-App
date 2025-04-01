import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext'

const useSignup = () => {
  const [loading,setLoading] = useState(false)

  const {setAuthUser} = useAuthContext()

  const signup = async({fullName,username,password,confirmPassword,gender}) => {
    const success = handleInputErrors({fullName,username,password,confirmPassword,gender})
    if(!success) return

    try {
        setLoading(true)
        const res = await fetch('/api/auth/signup',{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({fullName,username,password,confirmPassword,gender})
        })

        const data = await res.json()
        if(data.error){
            throw new Error(data.error)
        }
        
        localStorage.setItem('chat-user',JSON.stringify(data))
        setAuthUser(data)
    } catch (error) {
        toast.error(error.message)
    } finally{
        setLoading(false)
    }
  }

  return {loading,signup}
}

export default useSignup

function handleInputErrors({fullName,username,password,confirmPassword,gender}){
    if(!fullName || !username || !password || !confirmPassword || !gender){
        toast.error('plase fill out all the details')
        return false
    }

    if(password != confirmPassword){
        toast.error('passwords do not match')
        return false
    }

    if(password.length<8){
        toast.error('password must be atleast 8 characters')
        return false
    }

    return true

    // chars = ['!','@','#','$','%','^','&','*','(',')','_','+']

    // if(!chars.some(char => password.includes(char))){
    //     toast.error('password must contain a special character')
    // }

    // numbers = []
}