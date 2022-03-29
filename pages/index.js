import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts");
	const data = await res.json();

	return {
		props: { posts: data },
	};
};

export default function Home({ posts }) {
	return (
		<div>
			<h1>
				HIGH PERFORMANCE INVESTMENT PROPERTIES.
				<br />
				DRIVEN BY DATA, BACKED BY EXPERIENCE.
			</h1>

			{posts.slice(posts.length - 10, posts.length).map((post) => (
				<div id={post.id} key={post.id} className="elpico">
					<Link href={"/blog/" + post.id}>
						<a>
							<h3>{post.title}</h3>
							<p>{post.body}</p>
						</a>
					</Link>
				</div>
			))}
		</div>
	);
}
