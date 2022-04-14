import Head from "next/head";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const data = fetch("https://jsonplaceholder.typicode.com/posts?_limit=4")
      .then((r) => r.json())
      .then(setPosts);
  }, []);

  return (
    <>
      <Head>
        <title>Mon super blog</title>
      </Head>
      <ul>
        {posts.map((post) => (
          <li>
            <h3>{post.title}</h3>
          </li>
        ))}
      </ul>
    </>
  );
}
