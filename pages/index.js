import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home({ posts }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCount((n) => n + 1), 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Mon super blog</title>
      </Head>
      <h1>Cout: {count}</h1>
      <ul>
        {posts.map((post) => (
          <li>
            <Link href={`/blog/${post.id}`}>
              <a>
                <h3>
                  {post.id} - {post.title}
                </h3>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const posts = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=4"
  ).then((r) => r.json());
  return {
    props: {
      posts,
    },
  };
}
