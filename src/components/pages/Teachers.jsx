import React, { useEffect } from 'react'
import Banner from '../Organisms/Banner';
import { getAllTeachers } from '../../redux/actionsCreators';
import store from '../../redux/store';
import { connect } from 'react-redux';
import Teacher from '../Organisms/Teacher';

const Teachers = ({ match, teachers }) => {

  useEffect(() => {
    store.dispatch(getAllTeachers())
  }, [match]);



  return (
    <>
      <Banner
        color="third-color"
        image={{
          src: "https://www.aulaplaneta.com/wp-content/uploads/2018/10/shutterstock_213330322-1.jpg",
          alt: "Banner profesores"
        }}
        title="Nuestros profesores"
        subtitle="Este plantel docente está altamente calificado para guiarte en tu curso."
      />
      {
        teachers &&
        <main className="ed-grid m-grid-3 lg-grid-4 row-gap">
          {
            teachers.map(t => (
              <Teacher
                key={t.id}
                picture={t.picture}
                name={t.name}
                country={t.country} />
            ))
          }
        </main>
      }
    </>
  )
}

const mapStateToProps = state => ({
  teachers: state.teacherReducer.teachers
})

export default connect(mapStateToProps, {})(Teachers);
