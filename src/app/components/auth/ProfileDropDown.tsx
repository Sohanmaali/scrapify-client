import React, { useState, useRef } from 'react';
import { BiBell, BiLogOut, BiUser } from 'react-icons/bi';
import { CgShoppingCart } from 'react-icons/cg';
import { CiSettings } from 'react-icons/ci';
import sideBarData from '@/data/SideBar';
import Link from 'next/link';
import { LogOut } from './AuthButton';
const ProfileDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<any>(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleMouseEnter = (event: any) => {
        const relatedTarget = event.relatedTarget;
        if (!dropdownRef.current?.contains(relatedTarget)) {
            setIsOpen(true);
        }
    };

    const handleMouseLeave = (event: any) => {
        const relatedTarget = event.relatedTarget;
        if (!dropdownRef.current?.contains(relatedTarget)) {
            setIsOpen(false);
        }
    };

    return (
        <div ref={dropdownRef}
            className="relative z-[100]"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <img
                onClick={toggleDropdown}
                src="https://via.placeholder.com/40"
                alt="Profile"
                className="w-10 h-10 rounded-full border cursor-pointer hover:shadow-lg transition-shadow"
            />

            <div className={`absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 
                      transform transition-all duration-200 origin-top-right
                      ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                {/* Rest of the dropdown content remains the same */}
                <div className="px-4 py-3 border-b">
                    <p className="text-sm font-medium text-gray-900">John Doe</p>
                    <p className="text-xs text-gray-500">john@example.com</p>
                </div>

                <div className="py-1">
                    {sideBarData && sideBarData.map((item,index) => (
                        <Link key={index} href={item.url} className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-lightColor">
                            {/* <{I} className="w-4 h-4 mr-3" /> */}
                            {item.icon}
                            <span className="ml-2">{item.lable}</span>
                        </Link>)

                    )}
                </div>

                <div className="border-t py-1">
                    <Link href="#logout" className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                        <BiLogOut className="w-4 h-4 mr-3" />
                       <LogOut/>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProfileDropdown;