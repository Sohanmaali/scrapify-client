import { useDispatch } from "react-redux";
import { logout } from "../../store/slices/authSlice";
import { removeToken } from "../../utils/auth"
import { useRouter } from "next/navigation";
import setNotification from "../../utils/nitification";

export  function LogOut() {
  const router = useRouter();
  const dispatch = useDispatch();
    function handleLogout() {
       removeToken();
       dispatch(logout());
       removeToken();
       setNotification('info','Logged out successfully') 
       router.push('/')
    }
    return <span onClick={handleLogout}>Logout</span>
 
}
export  function Login() {
 const router = useRouter();
  function handleLogIn() {
  router.push('/pages/auth/login');  
  }
  return  <button
  onClick={handleLogIn}
  className="px-4 py-2  text-darkColor font-semibold rounded-lg border border-darkColor  focus:ring-2 focus:ring-mutedColor transition-all"
>
  Login
</button>
}