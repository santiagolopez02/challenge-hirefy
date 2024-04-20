import Tag from "@/components/tag";

const SectionTag = ({ tags, primary }) => {
  const array = primary ? tags?.slice(0, 2) : tags?.slice(0, 3);

  return (
    <div className="flex flex-row gap-2">
      {array?.map((item, index) => (
        <Tag key={index} text={item} primary={primary} />
      ))}
      {primary
        ? tags?.length > 2 && (
            <span className="text-[12px] leading-[18px] text-white">
              + {tags.length - 2} más
            </span>
          )
        : tags?.length > 3 && (
            <span className="text-[12px] leading-[18px] text-white">
              + {tags.length - 3} más
            </span>
          )}
    </div>
  );
};

export default SectionTag;
