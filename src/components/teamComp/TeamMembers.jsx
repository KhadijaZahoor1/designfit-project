import React from "react";
import member1 from "../../assests/images/member1.png";
import member2 from "../../assests/images/member2.png";
import member3 from "../../assests/images/member3.png";
import member4 from "../../assests/images/member4.png";
import member5 from "../../assests/images/member5.png";

const members = [
  {
    img: member1,
    name: "Stephen McGuill",
    position: "Managing Director",
  },
  {
    img: member2,
    name: "Nithin Thomas",
    position: "Head of Operations",
  },
  {
    img: member3,
    name: "Vitaliy Filatov",
    position: "Business Development Director",
  },
  {
    img: member4,
    name: "Mark Leo Mirandilla",
    position: "Senior Workplace Designer",
  },
  {
    img: member5,
    name: "Don Rainier Jamosmos",
    position: "Estimation Engineer",
  },
];

const TeamMembers = () => {
  return (
    <>
      {members.map((item) => {
        const { img, name, position } = item;
        return (
          <div className="" data-aos="zoom-out" data-aos-duration="1000">
            <img
              alt="team members"
              src={img}
              className="rounded-tl-[50px] rounded-tr-[50px]"
            />
            <h3 className="text-[18px] leading-[20px] font-Mulish text-pantone1 font-bold py-3">
              {name}
            </h3>
            <p className="text-[14px] leading-[16px] font-Mulish font-normal text-pantone1 opacity-[0.6]">
              {position}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default TeamMembers;
