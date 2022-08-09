import {Arrowdown, Menu_items, PrimalItem} from './styles';
import {useEffect, useState,useRef} from 'react';
 
 

function Drop_down(props){
    const idd = props.idd;
    const type = props.type;
    const title = props.title;
    const idContainer= props.idContainer;

    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState([]);
    const toggle = () => setOpen(!open);
    const [arrowIdentifier, setArrowIdentifier] = useState('1');

    let menuRef = useRef();

    useEffect(() =>{
        document.addEventListener("mousedown", (event) => {
            if(!menuRef.current.contains(event.target)){
                setOpen(false);
            }
       
        })
    },[])

    const items = [
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
        console.log(arrowIdentifier);
 
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

                <div className='dropTrue' style={{display: open == false ? 'none' : 'flex', transition: '1s'}}>
              
        <div className="dd-list">
          {items.map(item => (
            <li className="dd-list-item" key={item.id}>
                <span>{item.value}</span>
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