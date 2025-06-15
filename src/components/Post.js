import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import postsData from '../data/posts.json'; 
function Post() {
  const { id } = useParams();
  const [post, setPost] = useState(postsData.find(p => p.id === id));

  if (!post) return <div className="container mx-auto p-4">Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <img src={post.coverImage} alt={post.title} className="w-full h-64 object-cover rounded-md mb-6" />
      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
      <h2 className="text-2xl text-gray-600 mb-4">{post.subtitle}</h2>
      <p className="text-sm text-gray-500 mb-6">By {post.author} | {post.date}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {post.tags.map(tag => (
          <span key={tag} className="bg-gray-200 text-gray-700 text-sm px-2 py-1 rounded">{tag}</span>
        ))}
      </div>
      {post.sections.map((section, index) => (
        <div key={index} className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">{section.heading}</h3>
          <p className="text-gray-700 mb-4">{section.content}</p>
          {section.image && (
            <img src={section.image} alt={section.heading} className="w-full h-48 object-cover rounded-md mb-4" />
          )}
        </div>
      ))}
      <div className="mt-8 p-4 bg-gray-100 rounded-md">
        <h3 className="text-xl font-semibold mb-2">Conclusion</h3>
        <p className="text-gray-700">{post.conclusion}</p>
      </div>
      <div id="giscus-comments" className="mt-8"></div>
      <script src="https://giscus.app/client.js"
        data-repo="agrawalankush/agrawalankush"
        data-repo-id="R_kgDOGIV5oQ"
        data-category="Comments"
        data-category-id="DIC_kwDOGIV5oc4Crc5I"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="light"
        data-lang="en"
        crossOrigin="anonymous"
        async>
      </script>
    </div>
  );
}

export default Post;
