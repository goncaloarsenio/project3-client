import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function CourseDetails() {
  const [course, setCourse] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  //function to call API

  const getCourse = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/course/${id}`
      );

      setCourse(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //We need to call the function in a specific moment
  useEffect(() => {
    getCourse();
  }, []);

  //adicionar subs
  const addSubs = async (id) => {
    try {
      const storedToken = localStorage.getItem("authToken");
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/courses/${id}`,
        null,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );
      setCourse(response.data);
      navigate("/");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {course && (
        <>
          <div
            className="course-type"
            style={{ backgroundColor: course.color }}
          >
            {" "}
            <b>{course.type}</b>{" "}
          </div>
          <h2 style={{ color: course.color }}>{course.company}</h2>
          <h1 className="course-name">{course.name}</h1>
          <div>
            <img src={course.img} alt="" />
            <h4>{course.person}</h4>
            <p>{course.occupation}</p>
          </div>
          <br />
          <p>{course.duration}</p>
          <br />
          <p className="course-description">{course.description}</p>
          <br />
          <div
            className="course-topics"
            style={{ backgroundColor: course.color }}
          >
            {course.topics}
          </div>
          <button
            className="inscrever2"
            style={{ backgroundColor: course.color }}
            onClick={() => addSubs(course._id)}
          >
            Inscrever-me
          </button>
        </>
      )}
    </div>
  );
}

export default CourseDetails;
