const Avatar = ({ unicodeFlag }) => {
  const unicodeArray = unicodeFlag.split(" ");

  const flagEmojis = unicodeArray.map((unicode) => {
    const codePoint = unicode.replace("U+", "");

    return String.fromCodePoint(parseInt(codePoint, 16));
  });

  const flagEmoji = flagEmojis.join("");
  return (
    <div className="w-[52px] h-[52px] rounded-full bg-white flex flex-col justify-center items-center">
      <span>{flagEmoji}</span>
    </div>
  );
};

export default Avatar;
