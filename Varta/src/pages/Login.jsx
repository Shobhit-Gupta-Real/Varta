import React, { useState } from 'react'
import logo from '/finaltitle.png'
import { Button, TextField } from '@mui/material'
function Login() {
  const [login, setLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [bio, setBio] = useState('')
  const [username, setUsername] = useState('')
  const [img, setImg] = useState(null)
  return (
   <div className='h-[90vh] w-[90vw] bg-[#f4f5f8] rounded-2xl flex flex-col items-center justify-center relative shadow-custom-shadow'>
     <img src={logo} alt="" className='bg-cover bg-center filter blur-md absolute z-0'/>
     <div className='flex flex-col gap-[1.5rem] z-10'>
        {
            login ? (
                <>
                    <p className='text-2xl font-bold'>Login To Your Account</p>
                    <TextField id="filled-basic" label="Email" variant="filled"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}/>
                    <TextField
                    id="filled-password-input" label="Password" type="password" autoComplete="current-password" variant="filled"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}/>
                    <Button variant="contained" >LogIn</Button>
                    <div className='flex gap-2 flex-col items-center'>
                        <p>or</p>
                        <h1 className='cursor-pointer font-bold text-xl' onClick={()=>setLogin(false)}>Sign Up!</h1>
                    </div>
                </>
            ):(
                <>
                 <p className='text-2xl font-bold'>Signup To Your Account</p>
                 <div className='relative flex items-center justify-center'>
                 {img?(
                    <img src={URL.createObjectURL(img)} className='h-[100px] w-[100px] relative rounded-full' alt="" />
                 ):(
                 <svg xmlns="http://www.w3.org/2000/svg" id='profile_image' fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
            )}
                <label htmlFor="input_file">
                <svg xmlns="http://www.w3.org/2000/svg" style={{transform:"translateY(-3.1rem)", translate:"-6.3rem"}} id='edit_profile_image' fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                </svg></label>
                <input type="file" id='input_file' className='hidden' onChange={(e)=>setImg(e.target.files[0])}/>
                 </div>
                 <TextField id="filled-basic" label="Username" variant="filled"
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}/>
                    <TextField id="filled-basic" label="Bio" variant="filled"
                    value={bio}
                    onChange={(e)=>setBio(e.target.value)}/>
                    <TextField id="filled-basic" label="Email" variant="filled"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}/>
                    <TextField
                    id="filled-password-input" label="Password" type="password" autoComplete="current-password" variant="filled"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}/>
                    <Button variant="contained" color='error' >SignUp</Button>
                    <div className='flex gap-2 flex-col items-center'>
                        <p>or</p>
                        <h1 className='cursor-pointer font-bold text-xl' onClick={()=>setLogin(true)}>Log In!</h1>
                    </div>
                </>
            )
        }
     </div>
   </div>
  )
}

export default Login