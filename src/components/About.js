const About = () => {
  return (
    <div id="about" className="section dark2">
      <div className="container">
        <div className="section-title">
          <h1>About <span className="color-primary">Me</span></h1>
          <p className="width70">I'm Sudarshan, a B.Tech CSE student, blending code with creativity. Enthusiastic about tech's endless possibilities and crafting innovative solutions. </p>
        </div>
        <div className="section-flex">
          <div className="section-left">
            <img className="myphoto" src="/images/me.jpg" alt="myphoto" width="500px" />
          </div>
          <div className="section-right">
            <section >
              <h2 className="weight-light">Hi, I'm <span className="color-primary">Sudarshan Kumar Surubhatla</span></h2>
              <p>I'm a dedicated 3rd-year B.Tech CSE Data Analytics student with a passion for tech and data-driven solutions. Proactive, adaptable, and collaborative, I thrive on exploring innovative ideas. I also excel in web development, adding another dimension to my skill set.</p>
            </section>
            <hr />
            <section>
              <h2 className="weight-light">Personal <span className="color-primary">Info</span></h2>
              <div>
                <p><strong>Name:</strong> Sudarshan Kumar Surubhatla</p>
                <p><strong>Age:</strong> 20 years</p>
                <p><strong>Language:</strong> English, Telugu, Hindi</p>
                <p><strong>Address:</strong> Vijayawada, Andhra Pradesh, India.</p>
              </div>
            </section>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <h2 className="weight-light">My <span className="color-primary">Skills</span></h2>
            <section>PowerBI, R, Tableau</section>
            <hr />
            <section>HTML5, JavaScript, MERN</section>
            <hr />
            <section>Java, Python, Matlab</section>
          </div>
          <div className="column">
            <h2 className="weight-light">My <span className="color-primary">Certifications</span></h2>
            <section><p>MERN Stack Developer<br />Ethnus, Ongoing</p></section>
            <hr />
            <section><p>AWS Cloud Practitioner<br />Amazon, Ongoing</p></section>
            
          </div>
          <div className="column">
            <h2 className="weight-light">My <span className="color-primary">Education</span></h2>
            <section><p>Btech in CSE at VIT AP University, Amaravathi (2021 - 2025)<br/> CGPA: 9.30 (currently)</p>
            </section>
            <hr />
            <section><p>Intermediate (MPC) <br />SVES, Jangareddygudem (2019 - 2021)<br/>Percentage: 98.7</p>
            </section>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About;