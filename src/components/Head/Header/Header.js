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
            <Drop_down   idd='arrowImagem' title='IMAGEM'/>
            <Drop_down   idd='arrowMv' title='' type='mv' />
            <Drop_down   idd='arrowFarmacia' title='FARMÁCIA'  idContainer='farmacia_button'/>
            <Drop_down   idd='arrowKlinikos' title='KLINIKOS' idContainer='klinikos_button'/>
            <Drop_down   idd='arrowEventos' title='EVENTOS'  idContainer='eventos_button'/>
            <Drop_down   idd='arrowVitai' title='VITAI'  idContainer='vitai_button'/>


            <Portal>
                <div id='image_portal'>
                <img src={require('../../../images/botao_superior/portal.png')}/>
                </div>
                <div id='text_box'>
                    <h2>PORTAL</h2>
                </div>
            </Portal>
          </nav>
      </HeaderTag>
    )
}

export default Header_component;