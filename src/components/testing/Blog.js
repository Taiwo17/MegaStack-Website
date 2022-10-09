import React from 'react';
import NavbarX from './NavbarX';
import XFooter from './XFooter';
import './xhomepage.css';
import './blog.css';
import { Link } from 'react-router-dom';

function Blog() {
  const BlogDetails = [
    {
      id: 1,
      blogImage: '/images/Frame 81.png',
      blogTitle: `How To Upload Multiple files to Cloudinary in Nodejs using
              Promise.all`,
      blogDesc: `It has remained something confusing while perusing cloudinary
              documentation on how exactly do you upl...`,
      authorImage: '/images/author_image.png',
      blogAuthor: 'By Olaboye Olanrewaju',
      companyName: 'MegaStack',
      duration: '3 Min read',
    },
    {
      id: 2,
      blogImage: '/images/image 4.png',
      blogTitle: `How To Upload Multiple files to Cloudinary in Nodejs using
              Promise.all`,
      blogDesc: `It has remained something confusing while perusing cloudinary
              documentation on how exactly do you upl...`,
      authorImage: '/images/author_image.png',
      blogAuthor: 'By Olaboye Olanrewaju',
      companyName: 'MegaStack',
      duration: '3 Min read',
    },
    {
      id: 3,
      blogImage: '/images/image 5.png',
      blogTitle: `How To Upload Multiple files to Cloudinary in Nodejs using
              Promise.all`,
      blogDesc: `It has remained something confusing while perusing cloudinary
              documentation on how exactly do you upl...`,
      authorImage: '/images/author_image.png',
      blogAuthor: 'By Olaboye Olanrewaju',
      companyName: 'MegaStack',
      duration: '3 Min read',
    },
  ];
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
      <div className='blog-card-containers'>
        {BlogDetails.map((blogs) => {
          const {
            id,
            blogImage,
            blogTitle,
            blogDesc,
            authorImage,
            blogAuthor,
            companyName,
            duration,
          } = blogs;
          return (
            <div className='blog-container' key={id}>
              <div className='blog-big'>
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
      <div className='click'>
        <Link to='/view-more' className='click-more'>
          View More
        </Link>
      </div>
      <XFooter />
    </>
  );
}

export default Blog;
