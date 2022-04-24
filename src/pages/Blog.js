import React from 'react'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'

const BlogPage = () => {
  return (
    <>
      <Navbar />
      <div className="jumbo__container ">
        <div className="jumbotron ">
          <p className="text-center jumbo__text">Blog</p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default BlogPage
