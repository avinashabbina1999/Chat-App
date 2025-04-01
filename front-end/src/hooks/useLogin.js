import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext'

const useLogin = () => {

    const [loading,setLoading] = useState(false)

    const {setAuthUser} = useAuthContext()
  
    const login = async (username,password) =>{
        const success = handleInputErrors(username,password)
        if(!success) return

        try {
            setLoading(true)
            const res = await fetch('/api/auth/login',{
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({username,password})
            })

            const data = await res.json()
            if(data.error){
                throw new Error(data.error)
            }

            localStorage.setItem('chat-user',JSON.stringify(data))
            setAuthUser(data)
        } catch (err) {
            toast.error(err.message)
        } finally {
            setLoading(false)
        }
    }
    return {loading,login}
}

export default useLogin

function handleInputErrors(username,password){
    if(!username || !password){
        toast.error('plase fill out all the details')
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