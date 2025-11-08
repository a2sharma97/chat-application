import axios from "axios";
import { useEffect } from "react";

const useGetOtherUsers = () => {
  useEffect(() => {
    const fetchOtherUsers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/users/",
          {
            withCredentials: true,
          }
        );
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOtherUsers();
  }, []);
};

export default useGetOtherUsers;
