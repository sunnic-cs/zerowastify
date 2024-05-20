import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'


const LoginButton = () => {

    const router = useRouter();

    const [user, setUser] = useState({
        email: "",
        password : ""
    });

    const [buttonDisabled, setButtonDisabled] = useState(true);

    const [errorMessage, setErrorMessage] = useState('');


    const onLogin = async () => {
        setErrorMessage(''); // Clear previous error message
		try {
			const response = await axios.post('api/users/login', user);
			router.push('/');
            localStorage.setItem("user", response.data.user.lastName);
		} catch (error: any) {
            setErrorMessage('Invalid email or password'); 
		} 
	};

    useEffect(() => {
		if (user.email.length > 0 && user.password.length > 0) {
			setButtonDisabled(false);
		} else {
			setButtonDisabled(true);
		}
	}, [user]);

  return (
    <div className="gap-y-[18px]">
        <div className="flex flex-col">
            <span className="py-1 text-[18px] font-medium">Email Address</span>
            <input 
                type="email"
                className="bg-gray-100 p-3 rounded-md"
                value={user.email}
                onChange={(e) => setUser({...user, email : e.target.value})} />
        </div>
        
        <div className="flex flex-col">
            <span className="py-1 text-[18px] font-medium">Password</span>
            <input 
                type="password" 
                className="bg-gray-100 p-3 rounded-md " 
                value={user.password}
                onChange={(e) => setUser({...user, password : e.target.value})}/>
        </div>

        {/* Conditionally render error message */}
        {errorMessage && (
            <div className="text-red-500 font-bold text-sm mb-4">
             {errorMessage}
            </div>
        )}
        
        <button 
            type="submit" 
            onClick={onLogin} 
            className="bg-[#497B94] hover:bg-[#4B96BC] w-full text-white font-bold py-3 px-6 mt-6 rounded-[8px]"
            disabled={buttonDisabled}>
                Continue
        </button>
    </div>
  )
}

export default LoginButton