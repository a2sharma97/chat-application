import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../redux/messageSlice";

const useGetMessages = () => {
  const { selectedUser } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!selectedUser?._id) {
      return;
    }

    const fetchMessage = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/messages/${selectedUser?._id}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        // console.log(response.data.data);
        dispatch(setMessages(response.data.data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchMessage();
  }, [dispatch, selectedUser?._id]);
};

export default useGetMessages;
