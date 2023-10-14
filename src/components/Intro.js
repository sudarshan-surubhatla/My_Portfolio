const Intro = () => {
  return(
<div id="intro" className="section dark1">
  <div className="container">
    <div className="section-flex intro">
      <div className="section-left">
        <img src="/images/intro.svg" alt="intro" />
      </div>
      <div className="section-right">
        <p className="weight-light">Hello, My name is</p>
        <h1 className="color-primary">Sudarshan Kumar</h1>
        <h3 className="color-white">CSE Student</h3>
        <p><span className="color-primary"> #</span>Data Analysis <span className="color-primary">#</span>MERN <span className="color-primary">#</span>Web Development <span className="color-primary">#</span>Software Development </p>
      </div>
    </div>
  </div>
</div>
  )
}

export default Intro;