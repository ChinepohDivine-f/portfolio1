import React from 'react'
import './services.css'
import { FaRegSmileBeam } from "react-icons/fa";
import ListServices from './listServices'
import video from '../../assets/portfoliovideo.mp4'


export const Services = () => {
  return (
    <section id="services">
      <h5>What i offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <ListServices />

        <div>
          <div className="service__head">
            <h3>
              Hit me on <a href="#contact">LinkdIn</a> if need
            </h3>
          </div>

          <div className="dec"></div>
          <div className="service__list">
            <li>Graphic Design</li>
            <li>Website</li>
            <li>Sql administrator</li>
            <li>Java software with ui</li>
            <li>C programs from microntroller</li>
            <li>Private tutor on excel</li>
            <li>Drumming for your wedding</li>
            <li>Video editing</li>
            <li>Linux trouble shooting</li>
            <li>Windows os trouble shooting</li>
            <li>Photography</li>
            <li>IDE & OS setups</li>
            <div className="assurance">
              <FaRegSmileBeam />
            </div>
            <div class="ass">
              <p className="hope">You won't be disapointed</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="demovid">
        <video
          width="320"
          height="240"
          autoplay
          muted
          loop
          className="video__play"
        >
          <source src={video} type="video/mp4" />
          <source src={video} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div> */}
    </section>
  );
}
export default Services;