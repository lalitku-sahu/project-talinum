import React from "react";
import Buttons from "../../components/Buttons";

export default function CallUs() {
  return (
    <div className="relative box-border mx-[3%] py-[120px] px-[3%] bg-sky-50">
      <div className=" grid lg:grid-cols-2 gap-10  font-sans  ">
        <div className="flex flex-col lg:items-start md:items-center lg:text-left text-center justify-center">
          <h1 className="my-[20px] md:text-[55px] lg:text-[55px] text-[48px] tracking-tight font-bold block leading-none text-[#35b8be] antialiased">
            Call our store and takeaway when it suits you best.
          </h1>
          <p className="mb-[10px]  text-[18px] leading-[1.5] tracking-[-0.02em] text-[#546285]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500.
          </p>
          <Buttons>Contact Us</Buttons>
        </div>
        <div>
          <img
            src="https://assets.website-files.com/5e865e09d8efa3310676b585/5eb0bcb8036072a55de52baf_Food%20Takeaway.png"
            alt="restaurant"
            className=" inline-block top-0 -left-px max-h-[90%] max-w-full lg:w-full md:w-full	"
          />
        </div>
      </div>
    </div>
  );
}
