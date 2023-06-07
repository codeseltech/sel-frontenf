import sprite from '../../assets/sprite.svg';

export const Footer = () => {
  return (
    <div className='footerbg'>
      <section className='footer-section'>
        <div className='followus'>
          <div className='icans'>
            <a href='https://www.youtube.com/@skyinnk' target='_blank'>
              <svg className='footer-icon'>
                <use
                  className='icon-youtube2'
                  xlinkHref={`${sprite}#icon-youtube2`}
                />
              </svg>
            </a>
            <a href='https://t.me/skyinnksel' target='_blank'>
              <svg className='footer-icon'>
                <use
                  className='icon-telegram'
                  xlinkHref={`${sprite}#icon-telegram`}
                />
              </svg>
            </a>
            <a href='https://www.facebook.com/skyinnk' target='_blank'>
              <svg className='footer-icon'>
                <use
                  className='icon-facebook2'
                  xlinkHref={`${sprite}#icon-facebook2`}
                />
              </svg>
            </a>
          </div>
          <h3>Subscribe for Demo Class</h3>
        </div>

        <div className='contect'>
          <div className='contect-flex'>
            <svg className='footer-icon-contect'>
              <use className='icon-chat' xlinkHref={`${sprite}#icon-chat`} />
            </svg>
            <p> 7070349912</p>
          </div>

          <div className='contect-flex'>
            <svg className='footer-icon-contect'>
              <use className='icon-phone' xlinkHref={`${sprite}#icon-phone`} />
            </svg>
            <p>7070349912</p>
          </div>

          <div className='contect-flex'>
            <svg className='footer-icon-contect'>
              <use
                className='icon-envelop'
                xlinkHref={`${sprite}#icon-envelop`}
              />
            </svg>
            <p>skyinnk.tech@gmail.com</p>
          </div>
        </div>

        <div className='implinks'>
          <ul>
            <li>
              <a href='https://ncert.nic.in/textbook.php' target='_blank'>
                NCERT Text Book
              </a>
            </li>
            <li>
              <a
                href='https://cbseacademic.nic.in/curriculum_2024.html'
                target='_blank'
              >
                CBSE Academic
              </a>
            </li>

            <li>
              <a
                href='https://cbseacademic.nic.in/SQP_CLASSXII_2023-24.html'
                target='_blank'
              >
                Class XII Sample Question
              </a>
            </li>
          </ul>
        </div>

        <div className='tradmrk'>
          <p>SKYINNK EXPRESSIVE LEARNING&trade;</p>
          <p>All rights reserved</p>
        </div>
      </section>
    </div>
  );
};
