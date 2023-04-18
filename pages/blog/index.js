import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Meta } from "@/components";
import { blogLinks } from "@/db";

export default function Page() {
  return (
    <div className="site-wrap">
      <Meta
        title="Rice Purity Blog - Rice Purity Testing"
        description=" Everything you need to know about the Rice Purity test, score meaning"
      />
      <article>
        <h1>Rice Purity Blog</h1>

        {blogLinks.map((x, i) => {
          return (
            <Link key={i} href={x.path}>
              <p>{x.name}</p>
            </Link>
          );
        })}

        <Link href="/" alt="Rice Purity Test">
          {" "}
          <button>TAKE RICE PURITY TEST</button>
        </Link>
      </article>
    </div>
  );
}
