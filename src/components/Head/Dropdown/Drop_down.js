import {Arrowdown, Menu_items, PrimalItem} from './styles';
import {useEffect, useState,useRef} from 'react';
 
function Drop_down(props){
    const idd = props.idd;
    const type = props.type;
    const title = props.title;
    const idContainer= props.idContainer;
    const list_id = props.list_id;

    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState([]);
    const toggle = () => setOpen(!open);
    const [arrowIdentifier, setArrowIdentifier] = useState('1');
    const [itemsArray, setItemsArray] = useState([]);

    let menuRef = useRef();

    useEffect(() =>{
        document.addEventListener("mousedown", (event) => {
            if(!menuRef.current.contains(event.target)){
                setOpen(false);
            }
        })
    },[])

    var items = [
        {
          id: 1,
          value: 'webview'
        },
    
        {
          id: 2,
          value: 'medber'
        },
    
        {
          id: 3,
          value: 'medlab'
        }
    
      ];
 

    function handleOnClick() {
        if(open == true){
            setOpen(false);
        }else if(open == false){
            setOpen(true);
        }

        if(idContainer == 'imagem_button'){
            setItemsArray([
              {
                id: '1',
                value: 'WEBVIEW'
              },
          
              {
                id: '2',
                value: 'MEDBER'
              },
          
              {
                id: '3',
                value: 'MEDLAB'
              }
            ])
        }

        if(idContainer =='mv_button'){
          setItemsArray([
            {
              id: 'PEP_COLOR',
              value: 'PEP',
         
            },

            {
              id: 'SOUL_COLOR',
              value: 'SOUL',
          
            },

            {
              id: 'SACR_COLOR',
                value: 'SACR',
              
            },

            {
              id: 'PORTARIA_COLOR',
              value: 'PORTARIA',
            },
        
         
          ])
        }


        if(idContainer =='farmacia_button'){
          setItemsArray([
            {
              id: '1',
              value: 'ANTIBIÓTICOS',
         
            }
          ])
        }

        if(idContainer =='klinikos_button'){
          setItemsArray([
            {
              id: '1',
              value: 'HEAT',
            },
            {
              id: '2',
              value: 'HEJBC',
            },
            {
              id: '3',
              value: 'UPA',
            },
          ])
        }

        
        if(idContainer =='eventos_button'){
          setItemsArray([
            {
              id: '1',
              value: 'HEAT',
            },
            {
              id: '2',
              value: 'HEJBC',
            },
            {
              id: '3',
              value: 'UPA',
            },
          ])
        }

        
        if(idContainer =='vitai_button'){
          setItemsArray([
            {
              id: '1',
              value: 'HEAT',
            },
            {
              id: '2',
              value: 'HEJBC',
            },
            {
              id: '3',
              value: 'UPA',
            },
          ])
        }
  }

    return(
        <PrimalItem ref={menuRef}>
              <Menu_items>
                <div className='container_button' onClick= { () => handleOnClick()} id={idContainer}>
                  <h2>{title}</h2> 
                  <img style={{display: type == 'mv' ? 'block' : 'none'}} src={require('../../../images/botao_superior/mv.png')}/> 
                </div>
                  <div className='arrow' >
                    <Arrowdown>
                    <div id={idd} className='arrow down' onClick={() => handleOnClick()} style={{transform: open == false ? 'rotate(180deg)': 'rotate(0deg)'}} ><div></div></div>
                    </Arrowdown>
                  </div>
                </Menu_items>

                <div id={title}  className='dropTrue' style={{display: open == false ? 'none' : 'flex', transition: '1s'}}>
                <div className="dd-list" id={list_id}>
                  {itemsArray.map(item => (
                    <li className="dd-list-item" key={item.id}>
                        <p>{item.value} <span id={item.id} style={{display: list_id == 'li_mv' ? '' : 'none'}}>MV</span>
                      </p>
                    </li>
                  ))}
                </div>
              </div>

       
        </PrimalItem>
        
            
    )
}

const clickOutsideConfig = {
    handleClickOutside: () => Drop_down.handleClickOutside
  };
  
  export default  Drop_down;