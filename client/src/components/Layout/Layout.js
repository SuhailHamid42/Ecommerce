import React from 'react'
import Header from "./Header"
import Footer from "./Footer"
import { Helmet } from 'react-helmet';
import {ToastContainer} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import {Toaster} from "react-hot-toast";


const Layout = ({children, title, description, keywords, author}) => {
  return (
    <div>
        <Helmet>
          <meta charSet='utf-8'/>
          <meta name='description' content={description}/>
          <meta name='keywords' content={keywords}/>
          <meta name='author' content={author}/>

          <title>{title}</title>
        </Helmet>
      <div style={{minHeight : '7vh'}}>
      <Header/>
      </div>

      <div className="container my-4 mt-4">
      <main style={{minHeight : '76vh'}}> 
      {/* <Toaster/> */}
      {children}
      </main>
      </div>

      <Footer/>
    </div>
  )
};

Layout.defaultProps = {
  title : "Ecommerce App - Shop Now",
  description : 'Mern stack Project',
  keywords : "mern, react, node, mongodb",
  author : "SuhailHamid"
}

export default Layout
