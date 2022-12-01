import React from 'react'
import CoursesImg from '../images/image82.png'
import {useState, useEffect} from 'react'
import axios from 'axios'
import { Link, useParams } from "react-router-dom";

function Courses() {

    const [courses, setCourses] = useState([])
    const {id} = useParams();

  //function to call API
  
  const getCourses = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/course`)
  
      setCourses(response.data)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  
  //We need to call the function in a specific moment
  useEffect(()=> {
    getCourses();
  },[])
  





  return (
    <div>
        <div className='section1-courses'>
            <div className='courses-quotes'>
            <h2>Cursos JobCoach</h2>
            <p>Cursos com todas as informações necesssárias para te informares e aprenderes de forma organizada e explícita.</p>
            </div>
            <img src={CoursesImg} alt="" className='courses-img' />
        </div>


        {courses.map((course)=>{
      return(
        <div key={course._id} className='courseCard card'>
        <h2 className='courses-name'>{course.name} <br/> <span style={{color:course.color}}>{course.company}</span> </h2>
        <div className='ctype-div' style={{backgroundColor: course.color}}><p className='ctype-p'>{course.type}</p></div>
        <p>Grátis</p>
        <p>{course.duration}</p>
        <Link to={`/course/${course._id}`}>
        <button className='inscrever' style={{backgroundColor: course.color}}>Saber mais</button>
</Link>
        </div>
      )
    })}

    <div>
    <iframe src="https://www.youtube.com/embed/4FpyHj3IgQw" width="350" height="220" frameborder="0" title="YouTube video player"></iframe>
    </div>

    </div>
  )
}

export default Courses