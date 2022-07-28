import Link from "next/link";
import Image from "next/image";

//<Image layout='fill' src={post.frontmatter.cover_image} alt='' />

export default function Post({ post }) {
  return (
    <div className="card">
      <div className="post-date">Posted on {post.frontmatter.date}</div>

      <h3>{post.frontmatter.title}</h3>

      <p>{post.frontmatter.excerpt}</p>

      <Link href={`/blog/${post.slug}`}>
        <span style={{ textDecoration: "underline" }}>
          <a className="btn">Read More</a>
        </span>
      </Link>
    </div>
  );
}
