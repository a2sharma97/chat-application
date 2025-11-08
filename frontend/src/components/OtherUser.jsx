const OtherUser = () => {
  return (
    <div>
      <div className="flex gap-2 items-center hover:bg-green-700 rounded-sm p-2 cursor-pointer">
        <div className="avatar avatar-online">
          <div className="w-12 rounded-full">
            <img
              src="https://wallpapers.com/images/hd/cool-profile-picture-ld8f4n1qemczkrig.jpg"
              alt="user-profile"
            />
          </div>
        </div>
        <div className="flex justify-center items-center flex-1">
          <div className="flex gap-2 flex-1 ">
            <p>abhishek</p>
          </div>
        </div>
      </div>
      <div className="divider my-0 py-0 h-1"></div>
    </div>
  );
};

export default OtherUser;
