import React from 'react';
import './sectioncontainer.css';

function SectionContainer({ Heros }) {
  return (
    <>
      <div className='section-container'>
        <div className='section'>
          {Heros.map(({ id, title, content }) => {
            return (
              <div className='ideate-section' key={id}>
                <h2 className='ideate-title'>{title}</h2>
                <p className='ideate-content'>{content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default SectionContainer;
