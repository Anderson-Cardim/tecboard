import Botao from '../botao'
import '../formularioDeEventos/Formulario-de-eventos.estilos.css'
import Input from '../input'
import Label from '../label'
import ListaSuspensa from '../listaSuspensa/index'

export function FormularioDeEvento ({temas, aoSubmeter}) {

  function aoFormSubmetido(formData) {
    console.log('Form foi submetido', formData);
    const evento = {
      capa: formData.get('capa'),
      tema: temas.find(function (item) {
        return item.id == formData.get('tema')
      }),
      data: new Date(formData.get('dataEvento')),
      titulo: formData.get('nomeEvento')
    }
    console.log("evento: ",evento);
    aoSubmeter(evento)
  }

  return (
    <form className="form-evento" action={aoFormSubmetido}>
      <h2>Preencha para criar um evento: </h2>

      <fieldset className='container-label-input'>
        <Label htmlFor="nomeEvento">
          Qual o nome do evento?
        </Label>
        <Input 
          type="text" 
          id='nomeEvento' 
          placeholder='Summer dev hits' 
          name="nomeEvento"
        />

      </fieldset>

      <fieldset className='container-label-input'>
        <Label htmlFor="capa">
          Qual o endereço da imagem de capa?
        </Label>
        <Input type="text" id='capa' placeholder='https://...' name='capa'/>
      </fieldset>

      <fieldset className='container-label-input'>
        <Label htmlFor="dataEvento">
          Data do evento
        </Label>
        <Input 
          type="date" 
          id='dataEvento'
          name='dataEvento'
        />
      </fieldset>

      <fieldset className='container-label-input'>
        <Label htmlFor="tema">
          Tema do evento?
        </Label>

        <ListaSuspensa name="tema" id="tema" itens={temas} />
        
      </fieldset>

    <div className='div-botao'>
      <Botao type="submit" className='botao'>
        Criar evento
      </Botao>
    </div>

    </form>
  )
}