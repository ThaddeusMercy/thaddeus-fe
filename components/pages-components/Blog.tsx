"use client";

// library
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { ArrowLeft, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { BlogSchema } from "@/helpers";

function normalizeBlogHref(link: string): string {
  return link.trim().replace(/^@/, "");
}

function isExternalHref(href: string): boolean {
  return /^https?:\/\//i.test(href);
}

const Blog = () => {
  const goBack = () => {
    window.history.back();
  };

  const [activeBlog, setActiveBlog] = useState(0);
  const handleActiveBlog = (id: number) => {
    setActiveBlog(id);
  };

  const blogs: BlogSchema[] = [
    {
      id: 0,
      title: "Developer Relations is a bridge",
      des: "Here I broke down the role of a developer relations engineer and how to become one.",
      date_published: "12, September 2025",
      link: "https://mercy-thaddeus.hashnode.dev/devrel-is-a-bridge",
    },
    {
      id: 1,
      title: "Zapier AI Integration",
      des: "So, Zapier Just Dropped AI Integration on Steroids — Here's How I'd Do DevRel for It",
      date_published: "12, September 2025",
      link: "https://link1.blog",
    },
    {
      id: 2,
      title: "Goose AI Agent",
      des: "Here I introduced the Goose AI Agent, a tool that allows you to create your own AI agents.",
      date_published: "12, September 2025",
      link: "https://link1.blog",
    },
    {
      id: 3,
      title: "Netlify Deployment",
      des: "Netlify Deployment: Failed During Stage “Building Site” With React.JS",
      date_published: "12, September 2025",
      link: "https://link1.blog",
    },
  ];

  return (
    <div className="space-y-20">
      <button
        type="button"
        className="w-10 h-10 rounded-full border border-border bg-white flex items-center justify-center cursor-pointer"
        onClick={goBack}
      >
        <ArrowLeft size={20} className="font-medium" />
      </button>

      <div className="space-y-8">
        {blogs.map((blog) => (
          //   <div
          //     key={index}
          //     className={`flex items-center justify-between ${
          //       activeBlog === blog.id ? "bg-secondary" : ""
          //     } px-3`}
          //     onClick={() => handleActiveBlog(blog.id)}
          //   >
          //     <div>
          //       <h3>{blog.title}</h3>
          //       <p className="text-[#D8D8D8]">
          //         {blog.des} ✦ {blog.date_published}
          //       </p>
          //     </div>

          //     {activeBlog === blog.id && (
          //       <Link
          //         href={blog.link}
          //         className="w-10 h-10 rounded-full border border-border bg-white flex items-center justify-center cursor-pointer"
          //         onClick={goBack}
          //       >
          //         <ArrowUpRight size={20} className="font-medium" />
          //       </Link>
          //     )}
          //   </div>

          <motion.div
            key={blog.id}
            className={`flex flex-col md:flex-row items-end md:items-center gap-3 justify-between ${
              activeBlog === blog.id ? "bg-secondary" : ""
            } px-5 py-2 rounded-xl`}
            onClick={() => handleActiveBlog(blog.id)}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <div>
              <h3>{blog.title}</h3>
              <p className="text-[#D8D8D8]">
                {blog.des} ✦ {blog.date_published}
              </p>
            </div>

            {activeBlog === blog.id && (() => {
              const href = normalizeBlogHref(blog.link);
              const external = isExternalHref(href);
              const className =
                "w-10 h-10 rounded-full border border-border bg-white flex items-center justify-center cursor-pointer order-first md:order-last";
              return external ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  <ArrowUpRight size={20} className="font-medium" />
                </a>
              ) : (
                <Link href={href} className={className}>
                  <ArrowUpRight size={20} className="font-medium" />
                </Link>
              );
            })()}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
