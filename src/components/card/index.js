import { MdLocationOn } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { MdLocalPhone } from "react-icons/md";
import Avatar from "./avatar";
import SectionTag from "./section-tag";
const Card = ({
  emoji,
  name,
  location,
  states,
  phone,
  currency = [],
  languages = [],
}) => {
  console.log(states);
  return (
    <div className="w-full bg-graydark rounded-[20px] border-[2px] border-gray py-[30px] px-[31px] flex flex-col justify-between items-start h-[268px] sm:h-[256px]">
      <div className="flex flex-row items-center gap-3">
        <Avatar code={emoji} />
        <div>
          <h1 className="font-bold text-[25px] leading-[30px] text-white">
            {name}
          </h1>
          <div className="flex flex-row items-start justify-start gap-1">
            <div className="flex flex-row items-center gap-1 ">
              <MdLocationOn className="text-skyblue" />
              <p className="text-[12px] leading-[18px] text-white">
                {location}
              </p>
            </div>
            <div className="flex flex-row items-center gap-1">
              <BiWorld className="text-skyblue" />
              <p className="text-[12px] leading-[18px] text-white">
                {states || "--state"}
              </p>
            </div>
            <div className="flex flex-row items-center gap-1">
              <MdLocalPhone className="text-skyblue" />
              <p className="text-[12px] leading-[18px] text-white">
                {phone || "+--"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="border-b border-gray w-full pb-2 mb-2">
          <h2 className="font-semibold text-[16px] leading-[22px] text-white mb-1">
            Currency
          </h2>
          <div className="flex flex-row gap-3">
            <SectionTag tags={currency} primary={true} />
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-[16px] leading-[22px] text-white mb-1">
            Languages
          </h2>
          <div className="flex flex-row gap-3">
            <SectionTag tags={languages} primary={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
