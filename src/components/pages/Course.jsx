import React from 'react'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import store from '../../redux/store'
import { getCourse } from '../../redux/actionsCreators'
import Banner from '../Organisms/Banner'


const Course = ({ course }) => {

  useEffect(() => {
    store.dispatch(getCourse(1))
  }, [])


  return (
    <>
      {course &&
        <>
          <Banner
            color="dark-color"
            title={course.name}
            subtitle={course.subtitle}
            image={{
              src: "https://dev-res.thumbr.io/libraries/14/04/09/lib/1533172648445_1.jpg?size=854x493s&ext=jpg",
              alt: course.name
            }}
            courseBanner
            poster={course.picture}
            especialidad={course.data.specialities[0].name}
            info={course.information}
          />

          <main className="ed-grid lg-grid-10">
            <div className="lg-cols-7">
              <div className="course-fectures ed-grid lg-grid-3 s-border s-pxy-2 s-radius s-bg-white l-block l-section s-shadow-bottom">
                <div>
                  <h4>¿Qué aprenderás?</h4>
                  <ul dangerouslySetInnerHTML={{ __html: course.you_learn }} />
                </div>
                <div>
                  <h4>Conocimientos previos</h4>
                  <ul dangerouslySetInnerHTML={{ __html: course.requirements }} />
                </div> <div>
                  <h4>Nivel</h4>
                  <p>{course.level}</p>
                </div>
              </div>
              <h2>Temario del curso</h2>
              <div className="s-border s-pxy-2 lg-pxy-4 s-radius s-bg-white l-block l-section s-shadow-bottom">
                {
                  course.data.classes.map(cl =>
                    <div key={cl.class.id} className="course-class l-section" >
                      <h3>{cl.class.title}</h3>
                      <p>{cl.class.description}</p>
                      <ul>
                        {cl.subjects
                          .map(s =>
                            <li
                              key={s.subject.id}
                            >
                              {s.subject.title}
                            </li>)
                        }
                      </ul>
                    </div>
                  )
                }
              </div>
            </div>

          </main>
        </>

      }
    </>
  )
}

const mapStateToProps = state => ({
  course: state.courseReducer.course
})

export default connect(mapStateToProps, {})(Course);
