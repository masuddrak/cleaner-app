import React from 'react';
import { NavLink } from "react-router-dom";
const Navber = ({children}) => {
    return (
        <div class="drawer drawer-end">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col">
                <div class="w-full navbar origin-center">
                    <div class="flex-1 px-2 mx-2 text-white font-bold uppercase text-xl">Navbar Title</div>

                    <div class="flex-none text-white lg:hidden">
                        <label for="my-drawer-3" class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div class="flex-none hidden lg:block">
                        <ul class="menu menu-horizontal  text-white text-base">
                            <NavLink className='mr-5' to='/'>Home</NavLink>
                            <NavLink className='mr-5' to='/about'>About</NavLink>
                            <NavLink className='mr-5' to='/service'>Service</NavLink>
                            <NavLink className='mr-5' to='/contact'>Contact</NavLink>
                            <NavLink className='mr-5' to='/login'>Login</NavLink>
                        </ul>
                    </div>
                </div>
                {children}
            </div>
            <div class="drawer-side">
                <label for="my-drawer-3" class="drawer-overlay"></label>
                <ul class="menu p-4 w-80 mt-6  text-white text-base ">
                <NavLink className='mr-5' to='/'>Home</NavLink>
                            <NavLink className='mt-5' to='/about'>About</NavLink>
                            <NavLink className='mt-5' to='/service'>Service</NavLink>
                            <NavLink className='mt-5' to='/contact'>Contact</NavLink>
                            <NavLink className='mt-5' to='/login'>Login</NavLink>

                </ul>

            </div>
        </div>
    );
};

export default Navber;