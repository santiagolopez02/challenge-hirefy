const Tag = ({ text = "adsad", primary = true }) => {
  return (
    <div
      className={`rounded-xl px-2 ${primary ? "bg-turquoise" : "bg-skyblue"}`}
    >
      <p className="text-white font-semibold text-[14px] leading-[20px] text-center">
        {text}
      </p>
    </div>
  );
};

export default Tag;
