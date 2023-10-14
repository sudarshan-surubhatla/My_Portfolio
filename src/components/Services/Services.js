import Service from './Service'
import {ServicesData} from './ServicesData'

const Services = () => {
  return (
    <div id="services" className="section dark1">
      <div className="container">
        <div className="section-title">
          <h1>My <span className="color-primary">Projects and Works</span></h1>
          <p className="width70">I have developed some projects and worked as an intern.</p>
        </div>
        <div className="columns">
          {ServicesData.map(item => (
            <Service key={item.id} title={item.title} icon={item.icon} details={item.details} />
          ))}
          
        </div>
      </div>
    </div>
  )
}

export default Services;