import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const useGetMessages = async () => {
  const { selectedUser } = useSelector((store) => store.user);
  //   console.log(selectedUser?._id);
  useEffect(() => {
    if (!selectedUser?._id) {
      return;
    }

    const fetchMessage = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/messages/${selectedUser?._id}`,
          {
            withCredentials: true,
          }
        );
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMessage();
  }, []);
};

export default useGetMessages;
