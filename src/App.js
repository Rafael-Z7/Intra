import './App.css';
import {Portal, Arrowdown, Main_container, ListUL} from './styles';
import { FaCog } from 'react-icons/fa';
import {useState} from 'react';
 
import Header from  './components/Head/Header/Header';

function App() {
 

  return (
    <div className="App">
       <Header/>  
    <Main_container>
        <div id='left'>
            <div id='menu_down'>
             
                  <div className='item_down'>
                    <div className='image_down'>
                        <input type="image" src={require('./images/botao_inferior/gal.png')}  />
                    </div>
                    <div className='title_down'>
                        GAL
                    </div>
                   </div>


                   <div className='item_down'>
                    <div className='image_down'>
                    <input type="image" src={require('./images/botao_inferior/sus.png')}  />
                    </div>
                    <div className='title_down'>
                        CADSUS
                    </div>
                   </div>

                   <div className='item_down'>
                    <div className='image_down'>
                    <input type="image" src={require('./images/botao_inferior/webmail.png')}  />
                    </div>
                    <div className='title_down'>
                        WEBMAIL
                    </div>
                   </div>

                   <div className='item_down'>
                    <div className='image_down'>
                    <input type="image" src={require('./images/botao_inferior/fase.png')}/>
                    </div>
                    <div className='title_down'>
                        FASE
                    </div>
                   </div>

                   <div className='item_down'>
                    <div className='image_down'>
                    <input type="image" src={require('./images/botao_inferior/ged.png')}/>
                    </div>
                    <div className='title_down'>
                        GED
                    </div>
                   </div>

                   <div className='item_down'>
                    <div className='image_down'>
                    <input type="image" src={require('./images/botao_inferior/cid10.png')}  />
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

                   
            </div>
        </div>

        <div id='right'>
          <div id='desenho_container'>
            <img src={require('./images/desenho.png')}/>
          
          </div>
          <div id='transf_container'>
              <div id='transf_button'>
                  <FaCog size={28} style={{ marginLeft: '1vw' }} />
                   <span>
                    ABERTURA DE CHAMADOS
                   </span>
                   
              </div>
           </div>
        </div>
    </Main_container>

    </div>
  );
}

export default App;
