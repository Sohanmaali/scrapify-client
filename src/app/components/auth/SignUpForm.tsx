"use client";
import { useState } from "react";
import { BasicProvider } from "@/app/utils/basicprovider";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/app/store/slices/authSlice";
import { setToken } from "@/app/utils/auth";
import setNotification from "@/app/utils/nitification";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import Link from "next/link";
import { RootState } from "@/app/store/store";
import { validateObject } from "@/helpers/formvalidation";
export default function SignUpForm() {
// hooks
const dispatch = useDispatch();
  
  // state
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const [initialValue,setInitialValue] = useState({email : '', password : '',confirmPassword : '', name : '', mobile:''})

  // objects
  const validationRules:any = {
    name: { required: true, type: 'string', minLength: 3, maxLength: 30 },
    mobile: { required: true, type: 'number', min: 18, max: 99 },
    email: { required: true, type: 'email' },
  };
  

  // functions
  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
    setPasswordType(passwordVisible ? "password" : "text");
  };

  function handleChange(e :any){
   const {name,value} =  e.target;
   setInitialValue({
    ...initialValue,
    [name] : value
   })
   
  }
  async function handleSubmit(e : any){
    e.preventDefault()
    try {
      // const errors = validateObject(initialValue, validationRules);
      const errors ={}
      if (Object.keys(errors).length === 0) {
        
          const response = await new BasicProvider('auth/customer/register').postRequest(initialValue)
          console.log("responsel;-=-=-=---===-=--== ", response);
          
        // setNotification('success','Login Successfull') 
        // dispatch(login({ token: '123', user: {name : 'test', email : 'test', image:''} }));
        // setToken('123mmmmmmmmmmmmmmmmmmmmmmm')
        return;
      } else {
        console.log("Error : ",errors);
        return
      }
        const response = await new BasicProvider('/frontend/login').postRequest(initialValue);

      
        
    } catch (error) {
        
    }
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-relatedWhite py-10">
      <div className="flex flex-col md:flex-row w-full max-w-6xl bg-relatedWhite border border-darkColor rounded-lg shadow-2xl py-2">
        {/* Left Side (Form) */}
        <div className="w-full md:w-1/2 p-8">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6 ">
            Turn <span className="text-darkColor underline decoration-wavy">Scrap</span> into Savings Sign 
            Up Now!
          </h2>
          <hr className="w-48 border-1 border-darkColor justify-self-center" />
          <form >



          <div className="relative w-full mt-4">
              <input
               onChange={(e)=>{handleChange(e)}}
                type="text"
                id="name"
                name="name"
                className="peer w-full mt-4 px-3 pt-3.5 pb-0.2 border-b border-gray-300 placeholder-transparent focus:outline-none focus:ring-0 focus:border-darkColor text-mutedColor"
                placeholder="name"
              />
              <label
                htmlFor="name"
                className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-darkColor peer-focus:text-sm"
              >
                Name
              </label>
            </div>


            <div className="relative w-full mt-4">
              <input
               onChange={(e)=>{handleChange(e)}}
                type="text"
                id="email"
                name="email"
                className="peer w-full mt-4 px-3 pt-3.5 pb-0.2 border-b border-gray-300 placeholder-transparent focus:outline-none focus:ring-0 focus:border-darkColor text-black"
                placeholder="email"
              />
              <label
                htmlFor="email"
                className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-darkColor peer-focus:text-sm"
              >
                Email
              </label>
            </div>

            <div className="relative w-full mt-4">
              <input
              onChange={(e)=>{handleChange(e)}}
                type={passwordType}
                id="password"
                name="password"
                className="peer w-full mt-4 px-3 pt-3.5 pb-0.2 border-b border-gray-300 placeholder-transparent focus:outline-none focus:ring-0 focus:border-darkColor text-mutedColor"
                placeholder="Password"
              />
              <label
                htmlFor="password"
                className="absolute left-3 top-0 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-darkColor peer-focus:text-sm"
              >
                Password
              </label>
              <button
                type="button"
                id="togglePassword"
                onClick={togglePassword}
                className="absolute right-3 top-4 text-gray-500 hover:text-darkColor focus:outline-none"
             
             >
               {passwordVisible ? <FaRegEye/> : <FaRegEyeSlash/>}
              </button>
            </div>


            
            <div className="relative w-full mt-4">
              <input
               onChange={(e)=>{handleChange(e)}}
                type="password"
                id="confirmPassword"
                name="confirmPassword"

                className="peer w-full mt-4 px-3 pt-3.5 pb-0.2 border-b border-gray-300 placeholder-transparent focus:outline-none focus:ring-0 focus:border-darkColor text-mutedColor"
                placeholder="confirmPassword"
              />
              <label
                htmlFor="=confirmPassword"
                className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-darkColor peer-focus:text-sm"
              >
                Confirm Password
              </label>
            </div>


            <div className="relative w-full mt-4">
              <input
               onChange={(e)=>{handleChange(e)}}
                type="text"
                id="mobile"
                name="mobile"

                className="peer w-full mt-4 px-3 pt-3.5 pb-0.2 border-b border-gray-300 placeholder-transparent focus:outline-none focus:ring-0 focus:border-darkColor text-mutedColor"
                placeholder="mobile"
              />
              <label
                htmlFor="=mobile"
                className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-darkColor peer-focus:text-sm"
              >
                Mobile
              </label>
            </div>



            <div className="text-center mt-8">
              <button
              onClick={(e) => {handleSubmit(e)}}
                type="submit"
                className="w-full py-3 bg-darkColor text-relatedWhite rounded-lg hover:bg-mutedColor transition duration-200"
              >
               SignUp
              </button>
            </div>
            <div className="text-center mt-2">
              <p className="text-gray-700">
                Or Alredy have an account?{" "}
                <Link
                  href="/pages//auth/login"
                  className="text-darkColor hover:underline transition duration-200"
                >
                  Log in
                </Link>
              </p>
            </div>
          </form>
        </div>

        {/* Right Side (Image) */}
        <div
          className="hidden md:block w-1/2 bg-cover bg-center"
          style={{
            // backgroundImage: "url('./assert/images/scrap_holder_img.jpg')",
            backgroundImage: `url(https://via.placeholder.com/40)`,
          }}
        ></div>
      </div>
    </div>
  );
}
