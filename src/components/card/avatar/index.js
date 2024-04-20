const Avatar = ({ code = "🇦🇫" }) => {
  return (
    <div className="w-[52px] h-[52px] rounded-full bg-white flex flex-col justify-center items-center">
      <span>{code}</span>
    </div>
  );
};

export default Avatar;
