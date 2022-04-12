import React, {useState} from 'react';
import BondModal from './BondModal';
function BondList(pair) {
  const [active, setActive] = useState(false);
	return (
		<>
      {active && <BondModal 
            active={active} 
            setActive={setActive} 
            token1={pair.token1}
						token2={pair.token2}
						token1img={pair.token1img}
						token2img={pair.token2img}/>}

      
			<div className="hidden mb-7 md:flex items-center text-center max-w-2xl m-auto">
				<div className="text-sm flex flex-[2_2_0%]">
					<div className="flex">
						<img
							className="w-9 h-9"
							src={pair.token1img}
						/>
						<img
							className="relative transform -translate-x-3 w-9 h-9"
							src={pair.token2img}
						/>
					</div>
					<div className="text-left">
						<p>{pair.token1}-{pair.token2} LP</p>
						<p>Get LP</p>
					</div>
				</div>
				<h1 className="text-sm flex-1">$50.15</h1>
				<h1 className="text-sm flex-1">7%</h1>
				<h1 className="text-sm flex-1">2days</h1>
				<div onClick={()=>{setActive(!active)}} className="cursor-pointer hover:bg-slate-500 cursor flex-1 bg-slate-400 py-1 px-1 text-white text-md font-normal rounded-lg">
					Bond
				</div>
			</div>

			<div className="text-sm mb-7 md:hidden">
				<div className="flex mb-5">
					<div className="flex">
						<img
							className="w-9 h-9"
							src={pair.token1img}
						/>
						<img
							className="relative transform -translate-x-3 w-9 h-9"
							src={pair.token2img}
						/>
					</div>
					<div className="text-left">
						<p>{pair.token1}-{pair.token2} LP</p>
						<p>Get LP</p>
					</div>
				</div>
				<div className="flex justify-between mb-2">
					<p className="text-gray-400">Price</p>
					<p>$35.74</p>
				</div>
				<div className="flex justify-between mb-2">
					<p className="text-gray-400">Discount</p>
					<p>7%</p>
				</div>
				<div className="flex justify-between mb-2">
					<p className="text-gray-400">Duration</p>
					<p>2days</p>
				</div>
				<div onClick={()=>{setActive(!active)}} className="cursor-pointer hover:bg-slate-500 text-center bg-slate-400 py-2 px-1 text-white text-lg font-normal rounded-lg">
					Bond
				</div>
			</div>
		</>
	);
}
export default BondList;