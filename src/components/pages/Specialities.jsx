import React, { useEffect } from 'react'
import Banner from '../Organisms/Banner';
import store from '../../redux/store';
import { getAllSpecialities } from '../../redux/actionsCreators';
import { connect } from 'react-redux';
import Card from '../Organisms/Card';

const Specialities = ({ specialities }) => {

  useEffect(() => {
    store.dispatch(getAllSpecialities())
  }, []);


  return (
    <> <Banner

      color="first-color"
      image={
        {
          src: "https://www.aulaplaneta.com/wp-content/uploads/2018/10/shutterstock_213330322-1.jpg",
          alt: "Banner Especialidades"
        }
      }
      title="Especialidades"
      subtitle="Domina una tecnología con las rutas de aprendizaje que te ofrecemos."
    />

      {
        specialities &&
        <main className="ed-grid m-grid-3">
          {
            specialities.map(s => (
              <Card picture={s.picture}
                name={s.name}
                key={s.id}
                cardId={s.id} 
                path="especialidades"/>
            ))
          }

        </main>
      }

    </>
  )
}

const mapStateToProps = state => ({
  specialities: state.specialityReducer.specialities
})
export default connect(mapStateToProps, {})(Specialities);
