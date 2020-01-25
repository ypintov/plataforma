import React, { useEffect } from 'react'
import Banner from '../Organisms/Banner';
import { connect } from 'react-redux';
import store from '../../redux/store';
import { getAllCourses } from '../../redux/actionsCreators';
import Card from '../Organisms/Card';

const Courses = ({ courses }) => {

  useEffect(() => (
    store.dispatch(getAllCourses())
  ), []);

  return (

    <>
      <Banner

        color="dark-color"
        image={
          {
            src: "https://www.aulaplaneta.com/wp-content/uploads/2018/10/shutterstock_213330322-1.jpg",
            alt: "Banner Cursos"
          }
        }
        title="Nuestros cursos"
        subtitle="Comienza desde cero hoy mismo en tu camino a dominar la tecnología."
      />
      {
        courses &&
        <main className="ed-grid m-grid-5">
          {
            courses.map(c => (
              <Card
                key={c.id}
                picture={c.picture}
                name={c.name}
                cardId={c.id}
                path="curso"
              />))
          }
        </main>
      }
    </>
  )
}

const mapStateToProps = state => ({
  courses: state.courseReducer.courses
})

export default connect(mapStateToProps, {})(Courses);
