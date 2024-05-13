import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


const Mobilenavbar = () => {
    const [show, setShow] = useState(false)
    const Home = [
        {
            title: " Home",
            link: "/home"
        },
        {
            title: "About",
            link: "/about"
        },
        {
            title: "Services",
            link: "/services"
        },
        {
            title: "Testimonial",
            link: "/testimonial"
        },
        // {
        //     title:"Login",
        //     link:"/login"
        // },
        // {
        //     title:"Register",
        //     link:"/register"
        // }


    ]
    const handleclick = () => {
        
        setShow(!show)
    }
    return (
        <nav className=" flex flex-col  lg:hidden">
            <div className='flex  justify-between items-center'>

                <div className="text-2xl font-bold text-black mb-4 sm:mb-0 px-4 mt-2 ">Logo</div>
                <div className='px-4 mt-2' onClick={() => {
                    handleclick()
                }}>{show ? <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="6.82843" y="0.5" width="40" height="4" rx="2" transform="rotate(45 6.82843 0.5)" fill="#005BC5" />
                    <rect x="4" y="28.7842" width="40" height="4" rx="2" transform="rotate(-45 4 28.7842)" fill="#005BC5" />
                </svg> : <svg width="40" height="22" viewBox="0 0 40 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="10" width="20" height="4" rx="2" fill="#1E1E1E" />
                        <rect x="5" y="9" width="30" height="4" rx="2" fill="#1E1E1E" />
                        <rect y="18" width="40" height="4" rx="2" fill="#1E1E1E" />
                    </svg>
                
}
                </div>
            </div>
            {
                show ? <div className=" w-full px-2">
                    {
                        Home.map((item, index) => {
                            return <div key={index} className=' w-full px-2 py-2 '>
                                {item.title}
                            </div>
                        })
                    }
                    <div className="px-2 flex justify-between">
                        <NavLink to="/login" className="px-6 py-2 mt-2 sm:mt-0 sm:ml-4 border border-transparent text-sm font-medium  text-white bg-black">Sign in</NavLink>
                        <NavLink to="/register" className="px-4 py-2 mt-2 sm:mt-0 sm:ml-4 border border-black  text-black text-sm font-medium   hover:bg-blue-700">Register</NavLink>
                    </div>


                </div> : ' '
            }

        </nav>


    )
}

export default Mobilenavbar;
