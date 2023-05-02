import Title from './Title';
import { services } from './data';

function Services() {
  const renderedServices = services.map((article) => {
    return (
      <article className="service" key={article.id}>
        <span className="service-icon">
          <i className={article.icon}></i>
        </span>
        <div className="service-info">
          <h4 className="service-title">{article.heading}</h4>
          <p className="service-text">{article.text}</p>
        </div>
      </article>
    );
  });

  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />

      <div className="section-center services-center">{renderedServices}</div>
    </section>
  );
}
export default Services;
