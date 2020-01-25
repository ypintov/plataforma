import React, { useEffect } from 'react'
import Banner from '../Organisms/Banner'
import { connect } from 'react-redux';
import store from '../../redux/store';
import { getAllPosts } from '../../redux/actionsCreators'
import Publication from '../Organisms/Publication';

const Home = ({ posts }) => {

  useEffect(() => {
    store.dispatch(getAllPosts())
  }, [])


  return (
    <>
      <Banner
        color="dark-color"
        title="Bienvenido a la experiencia mas increible en educacion online. Comienza hoy mismo aprender"
        subtitle="Nuestro equipo  ha desarrollado esta plataforma pensando en ti. Sabemos que estás buscando contenido de calidad pensando en ti."
        image={
          {
            src: "https://img.culturacolectiva.com/featured/2020/01/10/1578684726202/implementaran-revision-de-mochilas-en-planteles-tras-tragedia-en-colegio-de-torreon-medium.png",
            alt: "Plataforma Online"
          }
        }
        home
        poster="https://dev-res.thumbr.io/libraries/14/04/09/lib/1533172648445_1.jpg?size=854x493s&ext=jpg"
      />
      <main className="ed-grid m-grid-3">
        <div className="l-section m-cols-2">
          <h2>Ultimas publicaciones</h2>
          {
            posts ?
              <div>
                {
                  posts.map(p =>
                    <Publication
                      key={p.id}
                      title={p.title}
                      author={p.author}
                      fecha={p.fecha}
                      content={p.content} />)
                }
              </div>
              :
              <p>No existen publicaciones</p>

          }
        </div>
        <div>
          <h3>Lista de categorías</h3>
          <ul className="feature-list">
            <li><span>React.js</span></li>
            <li><span>React Native</span></li>
            <li><span>Vue.js</span></li>
            <li><span>Angular</span></li>
            <li><span>Docker</span></li>
            <li><span>Spring</span></li>
            <li><span>Node</span></li>
          </ul>

        </div>
      </main>
    </>
  )
}

const mapStateToProps = state => ({
  posts: state.postReducer.posts
})

export default connect(mapStateToProps, {})(Home);
