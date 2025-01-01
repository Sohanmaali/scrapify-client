import { FaRecycle } from "react-icons/fa"

const ButtonLoader = ()=>{
return <>
<div className="flex items-center justify-center ">
  <div className="flex items-center justify-center space-x-4">
    <div className="w-16 h-16 flex items-center justify-center bg-darkColor rounded-full animate-spin">
      {/* <FaRecycle className="fas fa-recycle text-white text-3xl"></FaRecycle>  */}
      <img src="/logo/loader-logo.svg" alt="Spinner" className="w-12 h-12" />
    </div>
    <span className="text-xl font-semibold text-darkColor">Loading...</span>
  </div>
</div>



</>
}


export {ButtonLoader}