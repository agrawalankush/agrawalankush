import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import postsData from '../data/posts.json'; 
function Post() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const selectedPost = postsData.find(p => p.id === id);
    setPost(selectedPost);
  }, [id]);

  useEffect(() => {
    const loadGiscus = () => {
      if (document.getElementById('giscus-comments')) {
        const script = document.createElement('script');
        script.src = 'https://giscus.app/client.js';
        script.setAttribute('data-repo', 'agrawalankush/agrawalankush');
        script.setAttribute('data-repo-id', 'R_kgDOGIV5oQ');
        script.setAttribute('data-category', 'Comments');
        script.setAttribute('data-category-id', 'DIC_kwDOGIV5oc4Crc5I');
        script.setAttribute('data-mapping', 'pathname');
        script.setAttribute('data-strict', '0');
        script.setAttribute('data-reactions-enabled', '1');
        script.setAttribute('data-emit-metadata', '0');
        script.setAttribute('data-input-position', 'bottom');
        script.setAttribute('data-theme', 'light');
        script.setAttribute('data-lang', 'en');
        script.setAttribute('crossOrigin', 'anonymous');
        script.async = true;
        document.body.appendChild(script);
      }
    };
    window.addEventListener('scroll', loadGiscus, { once: true });
    return () => window.removeEventListener('scroll', loadGiscus);
  }, []);

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
    </div>
  );
}

export default Post;
