import React from 'react';
import NavbarX from './NavbarX';
import './blogmore.css';
import './readpost.css';

function ReadPost() {
  const BlogIndexs = [
    {
      id: 1,
      blogImage: '/images/Rectangle 33.png',
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
      <div className='blog-post-section'>
        <div className='blog-index-container'>
          <img src='/images/Back Nav.png' alt='' className='arrow-icon' />
          {BlogIndexs.map((blogIndex) => {
            const {
              id,
              blogImage,
              blogTitle,
              blogDesc,
              authorImage,
              blogAuthor,
              companyName,
              duration,
            } = blogIndex;
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
      </div>
    </>
  );
}

export default ReadPost;
