import { useMutation } from "react-query";
import axios from "axios";
import { loginUserType, postUserType } from "../types/Types";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../redux/user/user.actions";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { toggleDialogBox } from "../redux/dialogbox/dialogbox.actions";

export const useAuthUser = (type: string, API: string) => {
  const dispatch = useDispatch();
  const authFunc = async (values: loginUserType | postUserType) => {
    let response;
    if (type === "login") {
      response = await axios.post(`${API}`, values);
    } else if (type === "signup") {
      response = await axios.put(`${API}`, values);
    }
    return response?.data;
  };
  const mutation = useMutation(authFunc, {
    onSuccess: (data) => {
      const message = `${type} success`;
      toast.success(message);
      if (type === "login") {
        dispatch(setCurrentUser(data));
      }
    },
    onError: (error: any) => {
      if (!error.response) {
        toast.error("An error occured, Please check your network connection");
        return;
      }
      if (error.response.status === 401) {
        toast.error(error.response.data.message);
        return;
      }
      if (error.response.status === 422) {
        toast.error("Sign up failed, E-mail already exist");
        return;
      }
      toast.error("An error occured, please try again");
    },
  });
  return mutation;
};

export const useLogOutUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logOutFunc = () => {
    dispatch(setCurrentUser(null));
    navigate("/")
  }
  const logout = () => {
  dispatch(toggleDialogBox({
    Question: 'Are you want to sure you want to logout?',
    fn: logOutFunc
  }))
   
  };
  return logout;
};
