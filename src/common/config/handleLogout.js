import { toast } from "react-toastify";
import {logOut} from '../../features/auth/authSlice';

export const handleLogout = async (logOutUser, dispatch) => {
  try{
    const response = await logOutUser().unwrap();
    if(response?.success){
      dispatch(logOut());
      toast.success(response?.message);
    }
  }catch(error){
    console.log('failder to logiut', error)
  }
}