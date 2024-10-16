import React from 'react';

const About = () => {
  return (
    <div className='container mt-5'>
      <div className='card bg-dark text-warning'  style={{ maxWidth: '800px', margin: 'auto' }}>
        <div className='card-body'>
          <div className='text-center'>
            <h2>About Me</h2>
            <hr />
            <div>
              <p style={{ margin: '0 15%' }}>
                I like learning to code because it’s a fun hobby for me.
              </p>
              <p style={{ margin: '0 15%' }}>
                I also enjoy biking and going out to explore new places.
              </p>
              <p style={{ margin: '0 15%' }}>
                I play mobile games, which help me relax and have fun.
              </p>
              <hr />
              <h2 className='mt-3'>Background</h2>
              <p style={{ margin: '0 15%' }}>
                I am currently studying at Pamantasan ng Cabuyao for my college degree. Before this, I completed high school at AMA Computer College Calamba, having started my journey at Pulo National High School. I began my education at San Isidro Elementary School.
              </p>
              <p style={{ margin: '0 15%' }}>
                Alongside my studies, I gained work experience as a Game Attendant at Enchanted Kingdom, where I interacted with guests to ensure they had fun playing the games. I also worked as a Production Worker at SPI Corporation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
