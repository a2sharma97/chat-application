import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, fullName, password, gender } = req.body;

  if (
    [username, email, fullName, password, gender].some(
      (field) => field?.trim() === ""
    )
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const existedUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (existedUser) {
    throw new ApiError(409, "User with email or username already exists");
  }

  const profilePictureLocalPath = req.files?.profilePicture[0]?.path;

  if (!profilePictureLocalPath) {
    throw new ApiError(400, "Avatar file is required");
  }

  const profilePicture = await uploadOnCloudinary(profilePictureLocalPath);
  console.log("avatar file aari h ky", profilePicture);

  const user = await User.create({
    fullName,
    profilePicture: profilePicture.url,
    email,
    password,
    gender,
    username: username.tolowerCase(),
  });

  const userCreated = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!userCreated) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, userCreated, "User registered successfully"));
});

export { registerUser };
