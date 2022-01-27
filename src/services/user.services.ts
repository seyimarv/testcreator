import { useMutation } from "react-query";
import axios from "axios";
import { loginUserType, postUserType} from "../types/Types";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../redux/user/user.actions";

export const useAuthUser = (type: string, API: any) => {
    const dispatch = useDispatch()
    const  authFunc = async (values: loginUserType | postUserType) => {
       let response; 
       if(type === 'login') {
        response = await axios.post(`${API}`, values); 
       } else if(type === 'signup') {
        response = await axios.put(`${API}`, values); 
       }
      return response?.data;
    };
    const mutation = useMutation(authFunc, {
      onSuccess: (data) => {
        const message = `${type} success`;
        alert(message);
        if(type === 'login') {
            dispatch(setCurrentUser(data))
        }
      },
      onError: (error: any) => {
          if(!error.response) {
              alert('An error occured, Please check your network connection')
              return;
          }
          if(error.response.status === 401) {
              console.log(error.response)
              alert( error.response.data.message )
              return;
          }
          if(error.response.status === 422) {
            alert('Sign up failed, E-mail already exist' )
            return;
        }
          alert('An error occured, please try again')
      },
    });
    return mutation;
}
