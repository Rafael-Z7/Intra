import './App.css';
import {Header, Portal, Arrowdown, Main_container} from './styles';
import {useState} from 'react';

function App() {

  const [Arrow_state_imagens, setArrow_state_imagens] = useState('sim');
  const [Arrow_state_mv, setArrow_state_mv] = useState('sim');
  const [Arrow_state_farmacia, setArrow_state_farmacia] = useState('sim');
  const [Arrow_state_klinikos, setArrow_state_klinikos] = useState('sim');
  const [Arrow_state_eventos, setArrow_state_eventos] = useState('sim');
  const [Arrow_state_vitai, setArrow_state_vitai] = useState('sim');

  function arrowChange(value){

    if(value == 1){
      if(Arrow_state_imagens == 'sim'){
        setArrow_state_imagens('nao');
      }else if(Arrow_state_imagens == 'nao'){
        setArrow_state_imagens('sim');
      }
    }

    if(value == 2){
      if(Arrow_state_mv == 'sim'){
        setArrow_state_mv('nao');
      }else if(Arrow_state_mv == 'nao'){
        setArrow_state_mv('sim');
      }
    }

    if(value == 3){
      if(Arrow_state_farmacia == 'sim'){
        setArrow_state_farmacia('nao');
      }else if(Arrow_state_farmacia == 'nao'){
        setArrow_state_farmacia('sim');
      }
    }

    if(value == 4){
      if(Arrow_state_klinikos == 'sim'){
        setArrow_state_klinikos('nao');
      }else if(Arrow_state_klinikos == 'nao'){
        setArrow_state_klinikos('sim');
      }
    }

    if(value == 5){
      if(Arrow_state_eventos == 'sim'){
        setArrow_state_eventos('nao');
      }else if(Arrow_state_eventos == 'nao'){
        setArrow_state_eventos('sim');
      }
    }

    if(value == 6){
      if(Arrow_state_vitai == 'sim'){
        setArrow_state_vitai('nao');
      }else if(Arrow_state_vitai == 'nao'){
        setArrow_state_vitai('sim');
      }
    }
   
  }

  return (
    <div className="App">

      <Header>
       <div className='intranetLogo'>
       <img src={require('./images/botao_superior/intranet.png')}/>
 
       </div>
         <nav id='nav'>
           
           <div className='menu_items' id='imagens'>
              <div className='item_inside'  >
                <div className='container_button' onClick= { () => arrowChange(1)}>
                  <h2>IMAGENS</h2> 
                </div>
                  <div className='arrow' >
                    <Arrowdown>
                    <div id='arrowImagem' className='arrow down' onClick={() => arrowChange(1)} style={{transform: Arrow_state_imagens === 'sim' ? 'rotate(180deg)': 'rotate(0deg)'}} ><div></div></div>
                    </Arrowdown></div>
                </div>
            </div>

            <div className='menu_items' >
              <div className='item_inside'>
                <div className='container_button' onClick= { () => arrowChange(2)}>
                <img src={require('./images/botao_superior/mv.png')}/> 
                </div>
                <div className='arrow'>
                <Arrowdown>
                    <div id='arrowMv' className='arrow down' onClick= { () => arrowChange(2)} style={{transform: Arrow_state_mv === 'sim' ? 'rotate(180deg)': 'rotate(0deg)'}}><div></div></div>
                    </Arrowdown></div>
                </div>
            </div>

            <div className='menu_items'>
              <div className='item_inside'>
                <div className='container_button'  onClick={() => arrowChange(3)}>
                  <h2>FARMÁCIA</h2> 
                </div>
                <div className='arrow'>
                <Arrowdown>
                    <div id='arrowFarmacia' className='arrow down' onClick={() => arrowChange(3)} style={{transform: Arrow_state_farmacia === 'sim' ? 'rotate(180deg)': 'rotate(0deg)'}}><div></div></div>
                    </Arrowdown></div>
                </div>
            </div>

            <div className='menu_items'>
              <div className='item_inside'>
                <div className='container_button' id='klinikos_button' onClick={() => arrowChange(4)}>
                  <h2>KLINIKOS</h2> 
                </div>
                <div className='arrow'>
                <Arrowdown>
                    <div id='arrowKlinikos' className='arrow down' onClick={() => arrowChange(4)} style={{transform: Arrow_state_klinikos === 'sim' ? 'rotate(180deg)': 'rotate(0deg)'}}><div></div></div>
                    </Arrowdown></div>
                </div>
            </div>

            <div className='menu_items' >
              <div className='item_inside'>
                <div className='container_button' id='eventos_button'  onClick={() => arrowChange(5)}>
                  <h2>EVENTOS</h2> 
                </div>
                <div className='arrow'>
                <Arrowdown>
                    <div id='arrowEventos' className='arrow down' onClick={() => arrowChange(5)} style={{transform: Arrow_state_eventos === 'sim' ? 'rotate(180deg)': 'rotate(0deg)'}}><div></div></div>
                    </Arrowdown></div>
                </div>
            </div>

            <div className='menu_items' >
              <div className='item_inside'>
                <div className='container_button' id='vitai_button'   onClick={() => arrowChange(6)}>
                  <h2>VITAI</h2> 
                </div>
                <div className='arrow'>
                <Arrowdown>
                    <div id='arrowVitai' className='arrow down' onClick={() => arrowChange(6)} style={{transform: Arrow_state_vitai === 'sim' ? 'rotate(180deg)': 'rotate(0deg)'}}><div></div></div>
                    </Arrowdown></div>
                </div>
            </div>    

            <Portal>
                <div id='image_portal'>
                <img src={require('./images/botao_superior/portal.png')}/>
                </div>
                <div id='text_box'>
                    <h2>PORTAL</h2>
                </div>
            </Portal>
          </nav>
      </Header>

    <Main_container>
        <div id='left'>
            <div id='menu_down'>
                  <div className='item_down'>
                    <div className='image_down'>
                      <img src={require('./images/botao_inferior/gal.png')}/>
                    </div>
                    <div className='title_down'>
                        GAL
                    </div>
                   </div>


                   <div className='item_down'>
                    <div className='image_down'>
                      <img src={require('./images/botao_inferior/sus.png')}/>
                    </div>
                    <div className='title_down'>
                        CADSUS
                    </div>
                   </div>

                   <div className='item_down'>
                    <div className='image_down'>
                      <img src={require('./images/botao_inferior/webmail.png')}/>
                    </div>
                    <div className='title_down'>
                        WEBMAIL
                    </div>
                   </div>

                   <div className='item_down'>
                    <div className='image_down'>
                      <img src={require('./images/botao_inferior/fase.png')}/>
                    </div>
                    <div className='title_down'>
                        FASE
                    </div>
                   </div>

                   <div className='item_down'>
                    <div className='image_down'>
                      <img src={require('./images/botao_inferior/ged.png')}/>
                    </div>
                    <div className='title_down'>
                        GED
                    </div>
                   </div>

                   <div className='item_down'>
                    <div className='image_down'>
                      <img src={require('./images/botao_inferior/cid10.png')}/>
                    </div>
                    <div className='title_down'>
                        CID10
                    </div>
                   </div>

                   <div className='item_down'>
                    <div className='image_down'>
                      <img src={require('./images/botao_inferior/nep.png')}/>
                    </div>
                    <div className='title_down'>
                        AGENDA NEP
                    </div>
                   </div>

                   <div className='item_down'>
                    <div className='image_down'>
                      <img src={require('./images/botao_inferior/epimed.png')}/>
                    </div>
                    <div className='title_down'>
                        EPIMED
                    </div>
                   </div>

                   <div className='item_down'>
                    <div className='image_down'>
                      <img src={require('./images/botao_inferior/sigtap.png')}/>
                    </div>
                    <div className='title_down'>
                        SIGTAP
                    </div>
                   </div>

                   <div className='item_down' id='chamado_id'>
                    <div className='image_down'>
                      <img src={require('./images/botao_inferior/chamado.png')}/>
                    </div>
                    <div className='title_down'>
                        CHAMADO
                    </div>
                   </div>

                   
            </div>
        </div>

        <div id='right'>
          <div id='desenho_container'>
            <img src={require('./images/desenho.png')}/>
          </div>
        </div>
    </Main_container>

    </div>
  );
}

export default App;
