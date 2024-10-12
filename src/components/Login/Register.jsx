import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

function Register() {
  const [registerDetail, setRegisterDetail] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterDetail(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log('Registering with:', registerDetail);
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <div className='flex flex-col items-center justify-center text-center m-10 p-10 bg-white rounded-lg shadow-lg sm:w-[80%] md:w-[40%]'>
        <h1 className="text-4xl font-bold mb-6 text-gray-800">REGISTER</h1>

        <form onSubmit={handleSubmit} className='w-full'>
          <div className='relative mb-4'>
            <FaUser className='absolute left-3 top-3 text-gray-400' />
            <input 
              type="text" 
              name="name"
              value={registerDetail.name}
              onChange={handleChange}
              className='w-full border border-gray-300 p-3 rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200'
              placeholder='Enter Your Name' 
              required
            />
          </div>

          <div className='relative mb-4'>
            <FaEnvelope className='absolute left-3 top-3 text-gray-400' />
            <input 
              type="email" 
              name="email"
              value={registerDetail.email}
              onChange={handleChange}
              className='w-full border border-gray-300 p-3 rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200' 
              placeholder='Enter Your Email' 
              required
            />
          </div>

          <div className='relative mb-4'>
            <FaLock className='absolute left-3 top-3 text-gray-400' />
            <input 
              type={passwordVisible ? 'text' : 'password'}
              name="password"
              value={registerDetail.password}
              onChange={handleChange}
              className='w-full border border-gray-300 p-3 rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200' 
              placeholder='Enter Your Password' 
              required
            />
            <button 
              type="button" 
              className='absolute right-3 top-3' 
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? <FaEyeSlash className='text-gray-400' /> : <FaEye className='text-gray-400' />}
            </button>
          </div>

          <div className='relative mb-6'>
            <FaLock className='absolute left-3 top-3 text-gray-400' />
            <input 
              type={confirmPasswordVisible ? 'text' : 'password'}
              name="confirmPassword"
              value={registerDetail.confirmPassword}
              onChange={handleChange}
              className='w-full border border-gray-300 p-3 rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200' 
              placeholder='Confirm Password' 
              required
            />
            <button 
              type="button" 
              className='absolute right-3 top-3' 
              onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
            >
              {confirmPasswordVisible ? <FaEyeSlash className='text-gray-400' /> : <FaEye className='text-gray-400' />}
            </button>
          </div>
          
          <button type="submit" className='w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200'>
            Register
          </button>
        </form>

        <div className='flex flex-row my-6 p-3'>
          <p>Already Have an Account?</p>
          <Link to="/login">
            <p className='text-blue-800 hover:underline cursor-pointer ml-1'>Login</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
