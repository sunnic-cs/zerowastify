import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import InputModal from './InputModal';
import Logo from '../../../assets/ZeroWastifyLogo.png'
import UserProf from '../../../assets/userIcon.png'
import Menu from '../../../assets/Menu.png';


const Navbar = () => {
    const [user, setUser] = useState<string | null>(null);
    const [isInputModalOpen, setIsInputModalOpen] = useState(false);
    const [notification, setNotification] = useState<string | null>(null);
    const [registrationType, setRegistrationType] = useState<string | null>(null);
  
    const navLinks = [
      { name: 'Home', route: '/' },
      { name: 'Our Cause', route: '/our-cause' },
      { name: 'Waste Bin Status', route: '/waste-bin-status' },
      { name: 'Leaderboards', route: '/leaderboards' },
      { name: 'Rewards', route: '/rewards' }
    ];
  
    useEffect(() => {
      if (typeof window !== 'undefined' && 'localStorage' in window) {
        const storedUser = window.localStorage.getItem('user');
        if (storedUser !== null) {
          setUser(storedUser);
        }
      }
    }, []);
  
    const router = useRouter();
  
    const onLogOut = async () => {
      const res = await axios.get('/api/users/logout');
      if (res) {
        localStorage.removeItem('user');
        setUser(null);
        router.push('/');
      }
    };
  
    const openInputModal = (type: string) => {
      setRegistrationType(type);
      setIsInputModalOpen(true);
    };
  
    const closeInputModal = () => {
      setIsInputModalOpen(false);
    };
  
    const handleSaveInput = async (value: string, value2? : string, value3? : string) => {
      try {
        let apiUrl = '';
        let res : any;
        switch (registrationType) {
            case 'smart-bins':
                apiUrl = '/api/admin/register-bins';
                res = await axios.post(apiUrl, { node_id : value, location : value2, type : value3 });
                break;
            case 'rfid-tags':
                apiUrl = '/api/admin/register-tags';
                res = await axios.post(apiUrl, { tags_id: value});
                break;
            case 'tags':
                apiUrl = '/api/users/add-tags';
                res = await axios.patch(apiUrl, { tags_id: value});
                break;
            default:
                apiUrl = ''; // Handle default case or throw an error
        }
        
        if (res.request.status === 200 || res.request.status === 201) {
          setNotification('Register success');
        } else {
          setNotification('Register failed');
        }
      } catch (error) {
        setNotification('Register failed');
        console.error('Failed to register:', error);
      }
  
      // Hide the notification after 3 seconds
      setTimeout(() => {
        setNotification(null);
      }, 3000);
    };
  
    const filteredNavLinks = user ? navLinks : navLinks.filter((link) => link.name !== 'Rewards');
  
    const isAdmin = user === 'admin'; // assuming this took the role of user and detect it as admin
  
    return (
      <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20">
        <div className="flex items-center">
          <Image src={Logo} alt="Logo" />
          <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
            {filteredNavLinks.map((item, index) => (
              <Link className="text-[#36485C] font-medium" key={index} href={item.route}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex gap-x-5">
          <div className="flex items-center gap-x-2">
            {user ? (
              isAdmin ? (
                <>
                  <button className="text-[#36485c] font-medium" onClick={() => openInputModal('smart-bins')}>Smart Bins</button>
                  <p> || </p>
                  <button className="text-[#36485c] font-medium" onClick={() => openInputModal('rfid-tags')}>RFID Tags</button>
                  <button onClick={onLogOut} className="hidden font-medium text-[#36485c] lg:block px-10">
                    Log Out
                  </button>
                  <p className="hidden lg:block font-medium text-[#36485c] pr-[56px]">Hi, {user}</p>
                </>
              ) : (
                <>
                  <button onClick={() => openInputModal('tags')} className="text-[#36485c] font-medium">Register Tags</button>
                  <button onClick={onLogOut} className="hidden font-medium text-[#36485c] lg:block px-10">
                    Log Out
                  </button>
                  <p className="hidden lg:block font-medium text-[#36485c] pr-[56px]">Hi, {user}</p>
                </>
              )
            ) : (
              <>
                <Link href="/register" className="hidden lg:block font-medium text-[#36485c] pr-[56px]">
                  Register
                </Link>
                <Image src={UserProf} alt="User Profile" />
                <Link href="/login" className="hidden font-medium text-[#36485c] lg:block">
                  Sign In
                </Link>
              </>
            )}
          </div>
          <Image src={Menu} alt="Menu" className="lg:hidden width:auto height:auto" />
        </div>
        {notification && (
          <div className={`absolute top-0 right-0 m-5 p-5 text-white rounded ${notification === 'Register success' ? 'bg-green-500' : 'bg-red-500'}`}>
            {notification}
          </div>
        )}
        {
            registrationType === 'smart-bins' ? (
                <InputModal isOpen={isInputModalOpen} onClose={closeInputModal} onSave={(value: string, location: string | undefined, binType: string | undefined) => {handleSaveInput(value, location, binType)}} type='smart-bins' />
            ) : registrationType === 'rfid-tags' ? (
                <InputModal isOpen={isInputModalOpen} onClose={closeInputModal} onSave={(value) => {handleSaveInput(value)}} type='rfid-tags' />
            ) : registrationType === 'tags' ? (
                <InputModal isOpen={isInputModalOpen} onClose={closeInputModal} onSave={(value) => {handleSaveInput(value)}} type='tags' />
            ) : null
        }
        

      </nav>
    );
  };
  
  export default Navbar;