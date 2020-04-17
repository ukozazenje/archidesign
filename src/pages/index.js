import React from 'react'
import Layout from '../components/layout'
const Index = () => {
  return (
    <Layout page="home" phoneColor="white">
      <section className="home-section">
        <div className="container is-fluid">
          <div className="columns">
            <div className="column home-content">
              <div className="heading">
                <h1 className="text-shadowed" >ŠTA NUDIMO</h1>
                <h3>kvalitet i profesionalni pristup u poslu</h3>
              </div>
              <div className="heading">
                <h1>IZA NAS OSTAJU</h1>
                <h3>ekološki oslobođen prostor i uspešno obavljeni poslovi</h3>
              </div>
              <div className="heading">
                <h1>TIM</h1>
                <h3>stručan i odgovoran</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Index
