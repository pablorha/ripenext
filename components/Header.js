import Link from "next/link";
import Image from "next/image";
import MainLogo from "../public/images/main-logo.png";
import Head from "next/head";
import { Fragment } from "react/cjs/react.development";

const Header = () => {
	return (
		<fragment>
			<Head>
				<title>La Gallampa</title>
			</Head>
			<header className="site-header">
				<Link href="/">
					<a>
						<Image
							src={MainLogo}
							width="242px"
							height="89.41px"
							alt="Ripehouse Advisory"
						/>
					</a>
				</Link>
				<nav>
					<ul className="main-nav">
						<li>
							<Link href="/">
								<a>Home</a>
							</Link>
						</li>
						<li>
							<Link href="/discover-our-difference">
								<a>Ripehouse Advisory</a>
							</Link>
						</li>
						<li>
							<Link href="/blog">
								<a>Blog</a>
							</Link>
						</li>
					</ul>
				</nav>
			</header>
		</fragment>
	);
};

export default Header;
