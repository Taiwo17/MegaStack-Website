import React from 'react';
import NavbarX from './NavbarX';
import BlogMoreView from './data';
import XFooter from './XFooter';
import './blogmore.css';
import './blog.css';

function BlogMore() {
  return (
    <>
      <NavbarX />
      <div className='hero-section'>
        <div className='hero-container'>
          <h2 className='hero-title-blog'>
            We don’t just build amazing products, we also talk ideas
          </h2>
          <p className='blog-content'>Our Blog Posts</p>
        </div>
      </div>
      <div className='blog-view-wrapper'>
        {BlogMoreView.map((blogView) => {
          const {
            id,
            blogImage,
            blogTitle,
            blogDesc,
            authorImage,
            blogAuthor,
            companyName,
            duration,
          } = blogView;
          return (
            <div className='blog-view-containers' key={id}>
              <div className='blog-big-view'>
                <img className='card-frame' src={blogImage} alt='' />
                <h2 className='blog-title'>{blogTitle}</h2>
                <p className='blog-desc'>{blogDesc}</p>
              </div>
              <div className='breadcrumb'>
                <img className='author-img' src={authorImage} alt='Author' />
                <p className='blog-author'>{blogAuthor}</p>
                <div className='vl'></div>
                <p className='blog-author'>{companyName}</p>
                <div className='vl'></div>
                <p className='blog-author'>{duration}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className='blogViewMoreSpace'></div>
      <XFooter />
    </>
  );
}

export default BlogMore;
