import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <div className='about'>
        <section className="page one">
          <h2><strong>HI, I'M </strong><br/><span>ADEDOYIN, OSENI</span></h2>
          <h3>WRITER/ CREATOR/ TEACHER</h3>
        </section>

        <section className="page two">
          <div className="grid-one">
              <h3>Let me tell you a story</h3>
              <p>
                  <i>
                    Lorem ipsum dolor sit amet consectetur  adipisicing elit. Velit omnis soluta <br/>
                    adipisci sunt fugiat aut? Deleniti dicta et ipsam! Saepe hic esse eaque molestiae <br/>
                    perferendis magni nisi porro odit tenetur?
                  </i>
              </p>
              <h3><strong>How may I help</strong></h3>
            </div>

          <div className="grid-two">
              <div className="home__image">
                <img src="./section-image-one.png" alt=""/>
              </div>
              <h4>I am Adedoyin</h4>
              <h5>follow me on</h5>
              <div className="social-media">
              <li><i class="fab fa-facebook"></i></li>
              <li><i class="fab fa-twitter"></i></li>
              </div>
          </div>
        </section>

        <section className="page three">
         <div className="dummy-one">

              <div className="big">

              </div>
              <div className="small right">
                <h3>What I can do</h3>
                <h2>See for  yourself what i can do in my portfolio</h2>
                <h4>LEARN MORE</h4>
              </div>
         </div>
         
         <div className="dummy-two">
              <div className="big">

              </div>
              <div className="small left">
                <h3>What I can offer</h3>
                <h2>Learn how i can help you, and your business grow in my services</h2>
                <h4>GET STARTED</h4>
              </div>
          </div>
        </section>

         
       
        </div>
    )
}

export default Home
