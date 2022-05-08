import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaDev } from 'react-icons/fa'

function Hero() {
  const socialProfiles = [
    {
      id: 1,
      platform: 'github',
      icon: <FaGithub />,
      link: 'https://github.com/morelmiles'
    },
    {
      id: 2,
      platform: 'twitter',
      icon: <FaTwitter />,
      link: 'https://twitter.com/LuigiMorel_'
    },
    {
      id: 3,
      platform: 'linkedin',
      icon: <FaLinkedin />,
      link: 'https://www.linkedin.com/in/luigimorel/'
    },
    {
      id: 4,
      platform: 'dev',
      icon: <FaDev />,
      link: 'https://dev.to/luigimorel_1/'
    }
  ]

  return (
    <div className="container ">
      <div className="row hero__container">
        <div className="col-md-6">
          <img
            className="img-responsive hero__img"
            src={
              'https://images.unsplash.com/photo-1500856056008-859079534e9e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            }
            loading="lazy"
            srcSet
            alt="Person basking in light "
          />
        </div>

        <div className="col-md-5">
          <h5 className="heading hero__heading text-center">Luigi Morel</h5>

          <p className="hero__para">
            I'm a Software Engineer and a digital normad who has worked with
            corporate companies and non-profits.
          </p>

          <p className="hero__para">
            I'm passionate about coding best practices, start-ups, and product
            design.
          </p>

          <p className="hero__para">
            When I'm not writing software, I'm reading, engaging in
            conversations about technologies and markets or taking long walks while listening to Afro EDM. 
          </p>

          <div className=" icons__container mb-3">
            {socialProfiles.map(x => (
              <i className="hero__icons mx-3">
                <a href={x.link} key={x.id} target="_blank" rel="noreferrer">
                  {x.icon}
                </a>
              </i>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
