import { Link } from 'react-router-dom'
import { expLearning } from '../../data/LandingPage/expLearning';

export const ExpressiveLearning = () => {
  return (
    <div className='expressive-learning-section'>
      {expLearning.map((exicon) => {
        const { link, icon, title, desc, id } = exicon;
        return (
          <section key={id}>
            <div>
              <Link href={link}>
                <section className='core-concepts'>
                  <div className='iconss'>
                    <svg className='svg-icon expressive-icon'>
                      <use className='expressive-icon-all' xlinkHref={icon} />
                    </svg>
                    <h4 className='title-pos'>{title}</h4>
                  </div>
                  <article className='article'>
                    <p>{desc}</p>
                  </article>
                </section>
              </Link>
            </div>
          </section>
        );
      })}
    </div>
  );
};
