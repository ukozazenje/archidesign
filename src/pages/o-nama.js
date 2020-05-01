import React, { useState } from 'react'
import Layout from '../components/layout'
import TamaraImg from '../images/tamara.png'


const Onama = () => {
  const [ onama, setOnama ] = useState(true)
  const [ odgovornost, setOdgovornost ] = useState(true)
  const [ saradnja, setSaradnja ] = useState(false)
  return (
      <Layout page="onama" phoneColor="white">
      <section className="about-us-section">
       <div className="container is-fluid">
         <div className="columns">
           <div className="column">
             <img src={TamaraImg} alt="tamara"/>
           </div>
           <div className="column">
            <button onClick={ () => setOnama(!onama) }>O NAMA</button>
            {
              onama ? <div className="onama-content">
              <p>ARCHIDESIGN-ING doo Kraljevo, osnovano je početkom
2016. godine, kao preduzeće registrivano za poslove 
inžinjeringa i to pretežno na radovima vezanim za sanacije,
rekonstrukcije i adaptacije objekata visokogradnje.
Tokom svog postojanja poslovna delatnost preduzeća je
raširena na sve usluge iz oblasti građevinarstva
(niskogradnja, čak delimično i rekonstrukcija spomenika
kulture), ali prevashodna i osnovna delatnost su rekonstrukcija
i adaptacija poslovnih objekata.</p>
            </div> : null 
            }
            <button onClick={ () => setOdgovornost(!odgovornost) }>DRUŠTVENA ODGOVORNOST</button>
            { odgovornost ?  <div className="onama-content">
              <p>ARCHIDESIGN-ING PLUS  doo Kraljevo, je tokom svog
poslovanja pokazalo veliku dozu društvene odgovornosti.
Menadzment i zaposleni su se rado odazvali na mnoge
zajedničke humanitarne akcije, te je preduzeće pokazalo
humanost darovanjem najboljih učenika za Svetosavske 
proslave u više skola, izvođenjem radova koji nisu
fakturisani pre svge na školskim objektima, kako i
učešcem u TV emisiji “Sa Tamarom u akciji”, na sta 
smo posebno ponosni.</p>
            </div> : null }
            <button onClick={ () => setSaradnja(!saradnja) }>SARADNJA</button>
            { saradnja ? <div className="onama-content">
              <p style={{textAlign: 'left'}}>
                <ol>
                  <li>GRAD KRALJEVO - Gradska Uprava</li>
                  <li>SPECIJALNA BOLNICA SOKO BANJA</li>
                  <li>SPECIJALNA BOLNICA OZREN - Sokobanja</li>
                  <li>MINISTARSTVO UNUTRAŠNJIH POSLOVA</li>
                  <li>MAŠINSKI FAKULTET KRALJEVO</li>
                  <li>JP POŠTA SRBIJE</li>
                  <li>TURISTIČKA ORGANIZACIJA RAŠKA</li>
                  <li>GRADSKA UPRAVA RAŠKA</li>
                  <li>SRBIJAVOZ AD</li>
                  <li>KULTURNI CENTAR - Novi Pzar</li>
                  <li>GRAD BEOGRAD - Gradska uprava</li>
                  <li>JP GRADSKO STAMBENO</li>
                  <li>HELP LIFFE SRBIJA</li>
                  <li>PRAVNI FAKULTET KRAGUJEVAC</li>
                  <li>JP URBANIZAM PANČEVO</li>
                </ol>
                </p>
            </div> : null 
            }
           </div>
         </div>
       </div>
      </section>
    </Layout>
  )
}

export default Onama
