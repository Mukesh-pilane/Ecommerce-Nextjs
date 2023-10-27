'use client'
import Link from "next/link";
import ToggleTheme from "../ToggleTheme";
import NavAuth from "./NavAuth";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import NavCart from "./NavCart";
import React,{ useState } from "react";



const Header = () => {
    const pathname = usePathname();
    const router = useRouter()
    const [searchTerm, setSearchTerm] = useState('');
    

    const handleSearch = (event : React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            router.push(`/products?search=${searchTerm}`)
        }
      };
    return (
<>
{/* desktop and tablet version */}
            <header className='px-24 md:px-24 sm:flex flex-col dark:bg-gray-800 lg:flex-row bg-white items-center lg:justify-between  py-5 text-lg  sm:gap-9 fixed z-[99] w-full top-0 ' >
                <div className='lg:flex lg:flex-row items-center flex flex-col gap-8 '>
                <div className='mr-4 '>
					<Image
								src="/img/logo.png"
								width={150}
								height={100}
								alt="logo"
								// className="w-[100px] md:w-auto"
								className=' w-[100px] cursor-pointer'
							/>
                </div>
                <nav className='flex items-center lg:gap-16 gap-10 '>
                    <Link href={"/"} className={`text-slate-700 dark:text-white ml-14 ${ pathname == "/" ? "border-b-2  font-s_bold  pb-2 border-solid border-green-800 dark:border-white text-[#2e2a2a]" : ""} `}>Home</Link>
                    <Link href={"/cart"} className={`text-slate-700 dark:text-white ${pathname == "/cart" ? "border-b-2  font-s_bold  pb-2 border-solid border-green-800 dark:border-white text-[#2e2a2a]" : ""} `}><NavCart /></Link>
					
                </nav>
                </div>
                <div className='flex justify-between items-center lg:w-[32%] sm:w-[94%]'>
                <div className=' text-xl text-slate-500 w-full max-w-[300px] items-center flex relative'>
                <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="coursor-pointer w-10 h-5 text-gray-500 absolute px-1 left-2 "
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.9748 18.047L15.0698 14.1437C14.8164 13.8904 14.4031 13.8904 14.1506 14.147C13.8973 14.4037 13.8989 14.817 14.1539 15.072L18.0589 18.9754C18.1848 19.102 18.3506 19.1654 18.5164 19.1654C18.6839 19.1654 18.8514 19.1004 18.9781 18.972C19.2314 18.7154 19.2298 18.302 18.9748 18.047ZM0.833984 8.43037C0.833984 4.2412 4.24232 0.832031 8.43148 0.832031C12.6215 0.832031 16.0315 4.2412 16.0315 8.43037C16.0315 8.9262 15.9832 9.42203 15.8882 9.9037C15.819 10.2587 15.4715 10.4879 15.1248 10.4179C14.7723 10.3479 14.5432 10.0045 14.6132 9.65036C14.6915 9.2512 14.7307 8.8412 14.7307 8.43037C14.7307 4.96203 11.9048 2.13953 8.43148 2.13953C4.95898 2.13953 2.13398 4.96203 2.13398 8.43037C2.13398 11.9004 4.95898 14.7229 8.43148 14.7229C10.1882 14.7229 11.819 14.0187 13.0215 12.7404C13.2682 12.477 13.6807 12.467 13.9407 12.7154C14.2015 12.9637 14.2123 13.377 13.9657 13.6395C12.5357 15.1595 10.519 16.0304 8.43148 16.0304C4.24232 16.0304 0.833984 12.6212 0.833984 8.43037Z"
                fill="black"
                fillOpacity="0.58"
              />
            </svg>
                        <input type="text" 
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyPress={handleSearch}
                        className='text-sm indent-9 w-full bg-transparent shadow-md border-none outline-none  py-2 px-3 rounded-full focus:ring-1 focus:ring-black ' placeholder="Looking for something specific ?" />
                    </div>
					<div className='text-2xl text-slate-500 border-[2px] p-1 rounded-full border-[#212529] cursor-pointer '>
<NavAuth/>
                        
                    </div>
					{/* <div className="mt-2 text-2xl text-slate-500 p-1 cursor-pointer">
						<ToggleTheme />
					</div> */}
                   
					
                    </div>
            
            </header>
          
         
</>
    )
}

export default Header

