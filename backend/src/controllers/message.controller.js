import { Conversation } from "../models/conversation.model.js";
import { Message } from "../models/message.model.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const sendMessage = asyncHandler(async (req, res) => {
  const senderId = req.user?._id;
  const receiverId = req.params.id;
  const { message } = req.body;

  let gotConversation = await Conversation.findOne({
    participants: { $all: [senderId, receiverId] },
  });

  if (!gotConversation) {
    gotConversation = await Conversation.create({
      participants: [senderId, receiverId],
    });
  }

  const newMessage = await Message.create({
    senderId,
    receiverId,
    message,
  });

  //   console.log("message type ", newMessage);
  if (newMessage) {
    gotConversation.messages.push(newMessage._id);
  }

  await gotConversation.save({ validateBeforeSave: false });

  res.status(201).json(new ApiResponse(201, newMessage, "Message sent"));
});

const getMessage = asyncHandler(async (req, res) => {
  const receiverId = req.params.id;
  const senderId = req.user?._id;

  // console.log("getMessage: senderId=", senderId, "receiverId=", receiverId);
  const conversation = await Conversation.findOne({
    participants: { $all: [senderId, receiverId] },
  }).populate("messages");

  if (!conversation) {
    return res.status(200).json(new ApiResponse(200, [], "No messages yet"));
  }

  res
    .status(201)
    .json(new ApiResponse(201, conversation?.messages, "Received messages"));
});

export { getMessage, sendMessage };
