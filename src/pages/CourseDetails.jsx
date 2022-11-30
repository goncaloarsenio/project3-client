import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";

function CourseDetails() {

    const [course, setCourse] = useState(null)
    const {id} = useParams();

  //function to call API
  
  const getCourse = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/course/${id}`)
  
      setCourse(response.data)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  
  //We need to call the function in a specific moment
  useEffect(()=> {
    getCourse();
  },[])




  return (
    <div>
   
   {course && (
            <>
              <div className='course-type' style={{backgroundColor: course.color}}> <b>{course.type}</b> </div>
              <h2 style={{color: course.color}}>{course.company}</h2>
              <h1 className='course-name'>{course.name}</h1>
              <p>{course.duration}</p>
              <br />
              <p className='course-description'>{course.description}</p>
              <br />
              <div className='course-topics' style={{backgroundColor: course.color}}>{course.topics}</div>
              <button className='inscrever2' style={{backgroundColor: course.color}}>Inscrever-me</button>
            </>
        )}

   
    </div>
  )
}

export default CourseDetails