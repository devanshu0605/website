import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const SideNav = props => {
	const router = useRouter();
	const handleMenuClick = e => {
		const target = e.target;
		const isLink = target.hasAttribute("href");
		if (isLink) props.openMenu();
		else {
			const isNotMenu =
				target.classList && target.classList[0].includes("fixed");

			if (isNotMenu) props.openMenu();
		}
	};

	return (
		<div
			className={`fixed inset-0 w-full h-screen z-10 outline-none transition-all duration-75 ease-in-out transform ${
				props.open
					? "visible translate-x-0"
					: "invisible translate-x-full"
			}`}
			open={props.open}
			onClick={handleMenuClick}
			aria-hidden={!props.open}
			tabIndex={props.open ? 1 : -1}
		>
			<aside
				className={`relative ${
					props.open ? "visible" : "invisible"
				} bg-gray-100 flex flex-col items-center w-3/4 sm:w-1/2 h-full right-0 ml-auto md:hidden`}
				style={{
					boxShadow: "rgba(0,0,0,.2) -4px 0 4px"
				}}
			>
				<nav className="py-2 flex flex-col flex-1 items-center justify-center text-xl">
					<Link href="/">
						<a
							to="/"
							className={`p-8 font-semibold hover:text-gray-900 ${
								router.pathname === "/"
									? "text-gray-900"
									: "text-gray-600"
							}`}
							exact="true"
						>
							Home
						</a>
					</Link>
					<Link href="/about">
						<a
							to="/about"
							className={`p-8 font-semibold hover:text-gray-900 ${
								router.pathname === "/about"
									? "text-gray-900"
									: "text-gray-600"
							}`}
						>
							About
						</a>
					</Link>
					<Link href="/team">
						<a
							to="/team"
							className={`p-8 font-semibold hover:text-gray-900 ${
								router.pathname === "/team"
									? "text-gray-900"
									: "text-gray-600"
							}`}
						>
							Team
						</a>
					</Link>
					<Link href="/faqs">
						<a
							to="/faqs"
							className={`p-8 font-semibold hover:text-gray-900 ${
								router.pathname === "/faqs"
									? "text-gray-900"
									: "text-gray-600"
							}`}
						>
							FAQs
						</a>
					</Link>
					<Link href="/contact">
						<a
							to="/contact"
							className={`p-8 font-semibold hover:text-gray-900 ${
								router.pathname === "/contact"
									? "text-gray-900"
									: "text-gray-600"
							}`}
						>
							Contact
						</a>
					</Link>
					<div className="py-4 mx-8 flex flex-col border-t-2">
						<Image
							src="https://dsckiet.com/static/images/dsc_main.png"
							width={200}
							height={20}
							layout="fixed"
							objectFit="contain"
						/>
						<span className="text-xs self-end">
							KIET Group of Institutions
						</span>
					</div>
				</nav>
			</aside>
		</div>
	);
};

export default SideNav;
