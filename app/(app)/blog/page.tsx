"use client";
import { CalendarIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Component() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch("http://localhost:3000/api/getAllpost");
      const posts = await data.json();
      setPosts(posts.data);
    }
    fetchData();
  }, []);

  return (
    <div className="max-w-2xl mx-auto  p-4 mt-10 ">
      <h1 className="text-3xl  mb-8 font-extrabold">Blog</h1>
      <div className="space-y-8">
        {posts?.map((post, index) => (
          <div
            key={post?.id}
            className="border-b pl-3 hover:bg-black  border-r-2 border-white rounded-xl cursor-pointer pb-8"
          >
            <Link href={`blog/${post?.id}`}>
              <h2 className="text-xl text-white font-semibold mb-2">
                {post?.title}
              </h2>
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span className="mr-2 text-white">{post?.author}</span>
                <CalendarIcon className="w-4 text-white h-4 mr-1" />
                <span className="text-white">{post?.date}</span>
              </div>
              <p className="text-white">{post?.content?.slice(0, 30)} .....</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
