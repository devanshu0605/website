import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
	AiOutlineMedium,
	AiOutlineInstagram,
	AiOutlineTwitter,
	AiOutlineGithub,
	AiOutlineSlack
} from "react-icons/ai";

import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	return (
		<footer className="cntr space-y-4">
			<h3 className="text-lg font-bold">Explore</h3>
			<div className="flex flex-col space-y-4 md:flex-row md:space-y-0 justify-between">
				<div className="flex flex-col">
					<a
						className="px-2 py-1"
						href="https://www.kiet.edu/"
						target="_blank"
						rel="noopener"
					>
						KIET Group of Institutions
					</a>
					<Link href="/about">
						<a className="px-2 py-1">About us</a>
					</Link>
					<a
						className="px-2 py-1"
						href="https://forms.gle/YFTsmarHBrW57k5N8"
						target="_blank"
						rel="noopener"
					>
						Become a member
					</a>
				</div>
				<div className="flex flex-col">
					<Link href="/guidelines">
						<a className="px-2 py-1">Community Guidelines</a>
					</Link>
					<Link href="/team">
						<a className="px-2 py-1">Meet the team</a>
					</Link>
					<Link href="/faqs">
						<a className="px-2 py-1">FAQs</a>
					</Link>
				</div>
				<div className="flex flex-col justify-start">
					<div className="flex space-x-4 mini:space-x-2">
						{[
							<AiOutlineInstagram />,
							<AiOutlineTwitter />,
							<AiOutlineGithub />,
							<AiOutlineMedium />,
							<FaTelegramPlane />,
							<AiOutlineSlack />
						].map((ele, i) => (
							<a
								key={i}
								className="social h-8 w-8 rounded-full bg-gray-900 hover:bg-blue-dsc text-white flex justify-center items-center"
								href="https://medium.com/dsckiet"
								target="_blank"
								rel="noopener"
							>
								{ele}
							</a>
						))}
					</div>

					<p className="mt-3">
						Write to us at:{" "}
						<a
							href="mailto:dsckiet@gmail.com"
							target="_blank"
							rel="noopener"
						>
							<b>dsckiet@gmail.com</b>
						</a>
					</p>
				</div>
			</div>

			{isMounted ? (
				<div className="card border border-solid border-green-dsc border-b-4 rounded-lg">
					<iframe
						loading="lazy"
						className="border-0 h-80 w-full rounded-lg"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d890271.5846846282!2d76.92588757287956!3d29.35203146035557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf47204fb9241%3A0xf5c6d6eefa89a5df!2sKIET%20Group%20of%20Institutions!5e0!3m2!1sen!2sin!4v1590538552130!5m2!1sen!2sin&zoom=15"
						allowFullScreen=""
						aria-hidden="false"
						tabIndex="0"
						title="DSC KIET"
					></iframe>
				</div>
			) : null}

			<div className="flex flex-wrap justify-between items-center pb-4">
				<div className="">
					<Image
						loading="lazy"
						src="https://dsckiet.com/static/images/dsc_main.png"
						width={400}
						height={36}
					/>
				</div>

				<p className="text-xs ">
					&copy; copyright 2020 DSC KIET - Developed by{" "}
					<Link href="/">
						<a>
							<b>DSC KIET</b>
						</a>
					</Link>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
