import { useRouter } from "next/navigation";
import axios from 'axios';
import React, { useEffect } from 'react';

const RegisterButton = () => {

  const router = useRouter();

  const [user, setUser] = React.useState({
    firstName: '',
    lastName: '',
    email : '',
    password : ''
  })

  

  const [buttonDisabled, setButtonDisabled] = React.useState(true);

  const onSignUp = async () => {
    try {
      const response = await axios.post('/api/users/register', user)
      console.log('register OK!', response.data);
      router.push('/login')

    } catch (err : any) {
      console.log('Failed to sign up ', err.message)
    } 
  }

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.firstName.length > 0 &&
      user.lastName.length > 0 &&
      user.password.length > 0
    ) 
    {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user])


  return (
    <div className="gap-y-[18px]">
      <div className="flex flex-row gap-x-[13px]">
          <div className="flex flex-col">
          <span className="py-1 text-[18px] w-1/2">First Name</span>
          <input 
            type="text" 
            value={user.firstName} 
            className="bg-gray-100 p-3 rounded-md"
            onChange={(e) => setUser({ ...user , firstName: e.target.value})} />
          </div>
          <div className="flex flex-col">
          <span className="py-1 text-[18px] w-1/2">Last Name</span>
          <input type="text" value={user.lastName} className="bg-gray-100 p-3 rounded-md" 
            onChange={(e) => setUser({ ...user , lastName: e.target.value})} />
          </div>     
      </div>

      <div className="flex flex-col">
          <span className="py-1 text-[18px]">Email</span>
          <input type="email" value={user.email} className="bg-gray-100 p-3 rounded-md" 
            onChange={(e) => setUser({ ...user , email: e.target.value})} />
      </div>
      
      <div className="flex flex-col">
          <span className="py-1 text-[18px]">Password</span>
          <input type="password" value={user.password} className="bg-gray-100 p-3 rounded-md" 
            onChange={(e) => setUser({ ...user , password: e.target.value})} />
      </div>
      
      <button 
        type="submit" 
        className="bg-[#497B94] hover:bg-[#4B96BC] w-full text-white font-bold py-3 px-6 mt-6 rounded-[8px]"
        onClick={onSignUp}
        disabled={buttonDisabled} >  
          {buttonDisabled ?  "Sign up now" : "Continue" }
      </button>
      
    </div>
  )
}

export default RegisterButton