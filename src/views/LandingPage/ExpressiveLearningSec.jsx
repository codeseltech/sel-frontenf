import { expIcon } from '../../data/expIcon';
export const ExpressiveLearning = () => {
  return (
    <div className='expressive-learning-section'>
      {expIcon.map((exicon) => {
        const { link, icon, title, desc, id } = exicon;
        return (
          <section key={id}>
            <div>
              <a href={link}>
                <section className='core-concepts'>
                  <div className='iconss'>
                    <svg className='svg-icon expressive-icon'>
                      <use className='expressive-icon-all' xlinkHref={icon} />
                    </svg>
                    <h4 className='title-pos'>{title}</h4>
                  </div>
                  <article>
                    <p>{desc}</p>
                  </article>
                </section>
              </a>
            </div>
          </section>
        );
      })}
    </div>
  );
};
