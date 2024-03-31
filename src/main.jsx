import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './header.jsx'
import Login from './login.jsx';
import AddBox from './AddBox.jsx';
import CourseAdd from './CourseAdd.jsx';
import CollaborationSlide from './collaboration.jsx';
import NewsLetter from './NewsLetters.jsx';
import './index.css'
import Resources from './Resources.jsx';
import Footer from './footer.jsx';
import ShortCoursesCard from './ShortCoursesCard.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      {/* <Header/>  */}
      <ShortCoursesCard/> 
     {/* <Login/> 
     <CourseAdd selection="1"/> 
     <CollaborationSlide/> 
      <CourseAdd selection="2"/> 
      <NewsLetter/>
      <Resources/>
      <Footer/> */}


  </React.StrictMode>,
)
