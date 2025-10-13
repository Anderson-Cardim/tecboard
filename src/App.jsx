import './App.css'
import { FormularioDeEvento } from '../src/components/formularioDeEventos/index'
import { Banner } from './components/banner';
import Tema from './components/tema';
import { CardEvento } from './components/cardEvento/index';
import { useState } from 'react';

export default function App() {
  const temas = [
    {
      id: 1,
      nome: 'Front-end',
    },
    {
      id: 2,
      nome: 'Back-end,',
    },
    {
      id: 3,
      nome: 'DevOps',
    },
    {
      id: 4,
      nome: 'Inteligência Artificial',
    },
    {
      id: 5,
      nome: 'Data Science',
    },
    {
      id: 6,
      nome: 'Clound',
    },
  ]

  const [eventos, setEventos] = useState([
    {
      capa: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
      tema: temas[0],
      data: new Date(),
      titulo: 'Mulheres no Front',
    }
  ]);

  function adicionarEvento(evento) {
    setEventos([...eventos, evento]);
  }

  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <Banner/>
      <FormularioDeEvento 
        temas={temas} 
        aoSubmeter={adicionarEvento}
      />      

      <section className='container'>
          {temas.map(function (tema) { 
          if (!eventos.some(function (evento) { 
            return evento.tema.id === tema.id
          })) {
            return null;
          } 

          return (
            <section key={tema.id}>
              <Tema tema={tema}/>
              <div className='eventos'>
                {eventos.filter( function(evento) { 
                  return evento.tema.id === tema.id
                })
                .map(function(evento, indice) {  
                  return <CardEvento evento={evento} key={indice}/>  
                })}
              </div>
            </section>
          )})}
      </section>

    </main>
  )
}