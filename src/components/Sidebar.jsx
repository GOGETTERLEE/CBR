import React  from 'react';
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import{faBolt, faBook, faRightLeft} from "@fortawesome/free-solid-svg-icons";
import {faChartBar, faClone, faGem} from "@fortawesome/free-regular-svg-icons";
import {faTwitter, faDiscord, faTelegram} from "@fortawesome/free-brands-svg-icons";
function Sidebar({active, setActive}) {

  
	return (
     <div onClick={(e)=>{setActive(!active); e.stopPropagation(); }} className={`fixed lg:z-10 z-30 w-screen h-screen bg-black/60 backdrop-blur ${active ? 'opacity-100 ease-in' : 'w-0'} lg:relative lg:w-80`}>

       
         <div onClick={(e) => {e.stopPropagation();}} id="content" className={`p-4 font-bold fixed w-80 h-screen bg-slate-50 overflow-auto ${active ? 'shadow-xl shadow-black translate-x-0 ease-in' : '-translate-x-full ease-out'} duration-200 bg-neutral-100 lg:relative lg:transform-none md:shadow-none`}
  			>
           {/*contents*/}
          <div className="h-50 w-full flex justify-center items-center mt-5 mb-6">
            <img className="w-10" alt="" src="img/vec.svg"/>
            <p className="ml-2 font-bold text-2xl text-slate-800">VECTOR <span className="text-slate-700">FINANCE</span></p>
          </div>

          <ul className="text-stone-800 gap-2 font-normal text-lg">
          
            <NavLink className={({ isActive }) => (isActive ? 'flex items-center p-3 space-x-3 bg-gray-300 rounded-lg' : 'flex items-center p-3 rounded-lg space-x-3 hover:text-sky-900')} onClick={()=>{setActive(!active)}} to='/Dashbord'>
                <FontAwesomeIcon icon={faChartBar}/>
                <li>Dashboard</li>
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'flex items-center p-3 space-x-3 bg-gray-300 rounded-lg' : 'flex items-center p-3 rounded-lg space-x-3 hover:text-sky-900')} onClick={()=>{setActive(!active)}} to='/AuctionSwap'>
                <FontAwesomeIcon icon={faRightLeft}/>
                <li>Launch Swap</li>
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'flex items-center p-3 space-x-3 bg-gray-300 rounded-lg' : 'flex items-center p-3 rounded-lg space-x-3 hover:text-sky-900')} onClick={()=>{setActive(!active)}} to='/Bond'>
                <FontAwesomeIcon icon={faClone}/>
                <li>Bond</li>
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'flex items-center p-3 space-x-3 bg-gray-300 rounded-lg' : 'flex items-center p-3 rounded-lg space-x-3 hover:text-sky-900')} onClick={()=>{setActive(!active)}} to='/Stake'>
                <FontAwesomeIcon icon={faGem}/>
                <li>Stake</li>
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'flex items-center p-3 space-x-3 bg-gray-300 rounded-lg' : 'flex items-center p-3 rounded-lg space-x-3 hover:text-sky-900')} onClick={()=>{setActive(!active)}} to='/Zap'>
                <FontAwesomeIcon icon={faBolt}/>
                <li>Zap</li>
            </NavLink>
          </ul>
           <div className="my-5 border-solid border-1 border-t border-gray-300"></div>


           <ul className="text-stone-800 gap-2 font-normal text-lg">
           <Link className="flex items-center p-3 space-x-3 hover:bg-gray-200 hover:text-sky-900 rounded-lg" onClick={()=>{setActive(!active)}} to='/Stake'>
                <FontAwesomeIcon icon={faBook}/>
                <li>Docs</li>
            </Link>
            <Link className="flex items-center p-3 space-x-3 hover:bg-gray-200 hover:text-sky-900 rounded-lg" onClick={()=>{setActive(!active)}} to='/Stake'>
                <FontAwesomeIcon icon={faTwitter}/>
                <li>Twitter</li>
            </Link>
            <Link className="flex items-center p-3 space-x-3 hover:bg-gray-200 hover:text-sky-900 rounded-lg" onClick={()=>{setActive(!active)}} to='/Stake'>
                <FontAwesomeIcon icon={faTelegram}/>
                <li>Telegram</li>
            </Link>
            <Link className="flex items-center p-3 space-x-3 hover:bg-gray-200 hover:text-sky-900 rounded-lg" onClick={()=>{setActive(!active)}} to='/Stake'>
                <FontAwesomeIcon icon={faDiscord}/>
                <li>Discord</li>
            </Link>
          
          </ul>


           
            
          
           {/*contents*/}
         </div>  
      </div>
	);
}

export default Sidebar;