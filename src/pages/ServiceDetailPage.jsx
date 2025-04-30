import { useParams } from 'react-router-dom';
import ourServicesData from '../data/ourServicesData.js';
import '../styles/ServiceDetailPage.css';

function ServicesDetailPage() {
  const { service } = useParams();

  const currentService = ourServicesData.find(
    (item) => item.url === service
  );

  if (!currentService) return <div>Service not found</div>;

  return (
    <div className="container">

        <div className="intro no-fade">
          <span className="blue">{currentService.title}</span>
          <p>
            {currentService.intro.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>

        <div className="service-page">

          <div className="service-content">
              <div className="service-image">
              <img src={currentService.image} alt={currentService.title} />
              </div>

              <div className="service-description">
              <h1>What We Offer</h1>

              <div className="service-types">
                  {currentService.serviceType.service.map((type, index) => (
                    <div key={index} className="service-type">
                    <h3>{type.title}</h3>
                    <div className="service-details">
                        {type.image && <img src={type.image} alt={type.title} />}
                        {type.serviceDetails && <p>{type.serviceDetails}</p>}
                      </div>
                  </div>
                  ))}
              </div>

              <h2>Why Choose Us?</h2>
              <p>{currentService.whyChooseUs}</p>
              </div>
          </div>
        </div>
    </div>
  );
}

export default ServicesDetailPage;
