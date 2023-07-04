import React from "react";
import event from "../public/assets/mdi_event-edit.svg";
import heart from "../public/assets/fa6-regular_heart.svg";
import group from "../public/assets/formkit_people.svg";
import location from "../public/assets/pajamas_location.svg";
import price from "../public/assets/entypo_price-tag.svg";
import arrow from "../public/assets/gg_arrow-top-right.svg";
import logo from "../public/assets/ieee logo.png";
import instagram from "../public/assets/bxl_instagram-alt.svg";
import twitter from "../public/assets/bytesize_twitter.svg";
import linkedIn from "../public/assets/ri_linkedin-box-fill.svg";
import Image from "next/image";

const Hero = () => {
	return (
		<div className="ml-[118px] mt-[71.3px] flex flex-col justify-between gap-96">
			<div>
				<p className="text-textWhite w-[409px] h-[168px] text-3xl font-crimson">
					The hook up between creativity, Technical expertise and
					Strategy. <br />
					<br />
					Whats the Haps now...
				</p>
				<div className="flex gap-3 mb-2 mt-[170px]">
					<Image
						src={event}
						alt="Event Image"
						width={24}
						height={24}
					/>{" "}
					<h2 className="text-textWhite text-[22px] font-Sofia">
						Lorem ipsum
					</h2>
				</div>
				<p className="w-[418px] h-[125px] text-justify text-white mt-2 font-Sofia">
					Lorem ipsum dolor sit amet, consectetur adipiscing
					elit, sed do eiusmod tempor incididunt ut labore et
					dolore magna aliqua. Ut enim ad minim veniam, quis
					nostrud exercitation ullamco laboris nisi ut aliquip ex
					ea commodo consequat.
				</p>
				<div className="flex justify-end w-[418px]">
					<button className="btn-animation h-[40px] w-[120px] relative bg-transparent cursor-pointer border-2 border-solid border-border-green rounded-[10px] text-[#34AB68] overflow-hidden transition ease-in-out delay-200 hover:text-[#000] hover:border-none ">
						<span className="tracking-wide z-[1]">
							Register
						</span>
					</button>
				</div>
				<p className="text-textWhite font-Sofia text-justify text-base leading-6 mt-[27px] underline tracking-[0.8px]">
					starts july 27, grab your ticket before the 20th.
				</p>
				<div className="flex gap-5 mt-5">
					<Image
						src={heart}
						alt="Heart Image"
						width={20}
						height={20}
					/>
					<p className="text-textWhite text-base tracking-[0.48px] font-Sofia">
						Lorem ipsum blah blah bah
					</p>
				</div>
				<div className="flex gap-5 mt-5">
					<Image
						src={group}
						alt="Group Image"
						width={20}
						height={20}
					/>
					<p className="text-textWhite text-base tracking-[0.48px] font-Sofia">
						Lorem ipsum blah blah bah
					</p>
				</div>
				<div className="flex gap-5 mt-5">
					<Image
						src={location}
						alt="Location Image"
						width={20}
						height={20}
					/>
					<div className="text-textWhite text-base tracking-[0.48px] font-Sofia">
						<p className="flex gap-1 cursor-pointer">
							<span className="underline decoration-[#34AB68]">
								T.P. Ganesan Audi
							</span>
							<Image
								src={arrow}
								alt="north east arrow"
								width={18}
								height={18}
							/>
						</p>
					</div>
				</div>
				<div className="flex gap-5 mt-5">
					<Image
						src={price}
						alt="price Image"
						width={20}
						height={20}
					/>
					<p className="text-textWhite text-base tracking-[0.48px] font-Sofia">
						Not more than a couple rolls in java ;
					</p>
				</div>
			</div>
			<div className="box flex flex-col items-center border rounded-[20px] opacity-[.799999988079071] w-[654px] h-[466px] mb-12">
				<Image src={logo} alt="logo" width={332} height={120} />
				<p className="text-[33px] text-white font-semibold mt-8">
					Contact Us
				</p>
				<p className="text-[25px] text-white font-light leading-[40px] mt-9">
					SRMIST- Kattankulathur, Tamil Nadu
				</p>
				<p className="text-[25px] text-white font-light leading-[40px]">
					Lorem@ipsum.com
				</p>
				<div className="mt-9 flex gap-14">
					<Image
						src={twitter}
						alt="logo"
						width={70}
						height={70}
            className="cursor-pointer"
					/>
					<Image
						src={linkedIn}
						alt="logo"
						width={70}
						height={70}
            className="cursor-pointer"
					/>
					<Image
						src={instagram}
						alt="logo"
						width={70}
						height={70}
            className="cursor-pointer"
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
