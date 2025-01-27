import React from 'react';

import { posts } from '../../data/posts.ts';

import './latestPostSection.css';

const LatestPostSection = () => {
    return (
        <section className="latest-posts">
            <h2 className="latest-posts-title">Latest posts</h2>
            <div className="posts-grid">
                {posts.map((post, index) => (
                    <div key={index} className={`post-card ${index % 2 === 0 ? 'odd' : 'even'}`}>
                        <img src={post.image} alt={post.title} className="post-image" />
                        <div className="post-content">
                            <h3 className="post-title">{post.title}</h3>
                            <p className="post-description">{post.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LatestPostSection;
