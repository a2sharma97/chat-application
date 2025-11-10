import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setOtherUsers } from "../redux/userSlice";
const useGetOtherUsers = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchOtherUsers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/users/",
          {
            withCredentials: true,
          }
        );
        // console.log(response.data.data);
        dispatch(setOtherUsers(response.data.data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchOtherUsers();
  }, []);
};

export default useGetOtherUsers;
