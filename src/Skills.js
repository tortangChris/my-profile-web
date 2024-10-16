import React from 'react';

const Skills = () => {
  return (
    <div className='container mt-5'>
      <div className='card bg-dark text-warning' style={{ maxWidth: '800px', margin: 'auto' }}>
        <div className='card-body'>
          <div className='text-center'>
            <h2>My Skills</h2>
            <hr />
            <ul className='list-unstyled'>
              <li className='py-2 d-flex justify-content-center align-items-center'>
                <span className='me-2'>•</span> JavaScript
              </li>
              <li className='py-2 d-flex justify-content-center align-items-center'>
                <span className='me-2'>•</span> React
              </li>
              <li className='py-2 d-flex justify-content-center align-items-center'>
                <span className='me-2'>•</span> CSS
              </li>
              <li className='py-2 d-flex justify-content-center align-items-center'>
                <span className='me-2'>•</span> HTML
              </li>
              <li className='py-2 d-flex justify-content-center align-items-center'>
                <span className='me-2'>•</span> Java
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
