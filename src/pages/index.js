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
                <h1 className="text-shadowed main-heading " >Archidesign</h1>
              </div>
              <div className="heading">
                <h1>Tim</h1>
                <h3>stručan i odgovoran</h3>
              </div>
              <div className="heading">
                <h1 className="text-shadowed" >Šta nudimo</h1>
                <h3>kvalitet i profesionalni pristup u poslu</h3>
              </div>
              <div className="heading">
                <h1>Iza nas ostaju</h1>
                <h3>ekološki oslobođen prostor i uspešno obavljeni poslovi</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Index
