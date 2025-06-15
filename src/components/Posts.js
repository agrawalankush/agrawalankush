import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import postsData from '../data/posts.json'; // <--- Import the JSON file directly

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Instead of fetching, directly use the imported data
    setPosts(postsData);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.length > 0 ? ( // Added conditional rendering to handle initial empty state
          posts.map(post => (
            <div key={post.id} className="border rounded-lg p-4 shadow-md">
              <img src={post.coverImage} alt={post.title} className="w-full h-48 object-cover rounded-md mb-4" />
              <h2 className="text-xl font-semibold mb-2">
                <Link to={`/post/${post.id}`} className="text-blue-500 hover:underline">{post.title}</Link>
              </h2>
              <p className="text-gray-600 mb-2">{post.subtitle}</p>
              <p className="text-sm text-gray-500 mb-2">By {post.author} | {post.date}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span key={tag} className="bg-gray-200 text-gray-700 text-sm px-2 py-1 rounded">{tag}</span>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p>No posts to display.</p> // Message if posts are not available
        )}
      </div>
    </div>
  );
}

export default Posts;