import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to My Tech Blog</h1>
      <p className="mb-4">
        Hi, I'm Ankush Agrawal! This blog documents my journey in building tech projects, including my MEAN Stack PWA at <a href="https://indianolympicdream.com" className="text-blue-500">indianolympicdream.com</a>.
      </p>
      <Link to="/posts" className="text-blue-500 hover:underline">View All Posts</Link>
    </div>
  );
}

export default Home;
