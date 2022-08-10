import {HeaderTag, Arrowdown, Portal } from './styles';
import {useState} from 'react'
import Drop_down from '../../Head/Dropdown/Drop_down';

const Header_component = () =>{
 


    return(
        <HeaderTag>
       <div className='intranetLogo'>
       <img src={require('../../../images/botao_superior/intranet.png')}/>
 
       </div>
         <nav id='nav'>
            <Drop_down   idd='arrowImagem' title='IMAGEM' idContainer='imagem_button' list_id='li_imagem'/>
            <Drop_down   idd='arrowMv' title='' type='mv' idContainer='mv_button' list_id='li_mv'/>
            <Drop_down   idd='arrowFarmacia' title='FARMACIA'  idContainer='farmacia_button' list_id='li_farmacia'/>
            <Drop_down   idd='arrowKlinikos' title='KLINIKOS' idContainer='klinikos_button'  list_id='li_klinikos'/>
            <Drop_down   idd='arrowEventos' title='EVENTOS'  idContainer='eventos_button'  list_id='li_eventos'/>
            <Drop_down   idd='arrowVitai' title='VITAI'  idContainer='vitai_button' list_id = 'li_vitai'/>


            <Portal>
                <input id='image_portal' type="image" src={require('../../../images/botao_superior/portal.png')}/>
              
                <div id='text_box'>
                    <h2>PORTAL</h2>
                </div>
            </Portal>
          </nav>
      </HeaderTag>
    )
}

export default Header_component;