import styled from "styled-components";

export const Arrowdown = styled.div`
width:100%;
height: 33%;
display: flex;
align-items: flex-end;
justify-content: center;
margin-top: 2%;
.arrow{
 
    height: 15px;
    width: 15px;
    border-radius: 50%;
    margin: 15px;
    transition: 0.4s ease;
    display: flex;
    justify-content: center;    
    align-items: center;
    margin: 0; 
}

.arrow div:hover{
    cursor: pointer;
}

.arrow div {
    height: 8px;
    width: 8px;
    border-top: 5px solid #fff;
    border-left: 5px solid #fff;
    transform: rotate(45deg);
    top: 35px;
}

.down{
    transform: rotate(180deg);
}

`

export const Menu_items = styled.div`
width: 10.6vw;
height: 8.5vh;
margin-left: 1.1vw;
margin-top: 8.2%;
 

#klinikos_button{
    background-color: rgb(224,206,87);
}

#eventos_button{
    background-color: rgb(224,129,89);
}

#vitai_button{
    background-color: black;
    color: white;
}
 

 .container_button{

    font-family: 'century-gothic' ;
    color: black;
    font-size: 0.8em;
    font-weight: 1000;
    width:100%;
    height: 67%;
    border-radius: 15px;
    background-color: rgba(164,166,212,.9);
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
 
}

.container_button h2{

    outline: none;

}

 .container_button:hover{
    cursor: pointer;
}

 .container_button img{
    width:100%;
    height: 100%;

}

#klinikos_button{
    background-color: rgb(224,206,87);
}

#eventos_button{
    background-color: rgb(224,129,89);
}

#vitai_button{
    background-color: black;
    color: white;
}


`

export const PrimalItem = styled.div`

    .dropTrue{
      
        position: relative;
        display: flex;
        flex-direction:  column;
        width: 90%;
        margin-left: 1.1vw;
        background-color: rgb(29,28,80,0.9);
        list-style: none;
        border-radius: 20px;
    }

    .dropTrue #mv{
        background-color: red;
    }

    .dropTrue li{
 
        font-family: century-gothic;
        width: 100%;
        display: flex;
        color: white;
        justify-content: center;
       

    }

    .dropTrue li:last-child p{
        border-bottom: 0;
    }
    .dropTrue p{ 
        font-family: 'HalenoirExpanded-Black';
        height: 1.5rem;
       border-bottom: 1px solid white;
       text-align: center;
       width: 80%;
       margin-bottom: 2%;
    }

    .dd-list-item-img{
        height: 6vh;
    }

    #PEP_COLOR {
        color: rgb(255,255,0);
    }

    #SOUL_COLOR{
        color: rgb(242,117,8);
    }

    #SACR_COLOR{
        color: rgb(25,121,25);
    }
    
    #PORTARIA_COLOR{
        color: rgb(255,0,0);
    }

    #KLINIKOS{
        background-color: rgb(224,206,87,0.9);
    }

    #EVENTOS{
        background-color: rgb(224,129,89,0.9);
    }

    #VITAI{
        background-color: rgb(0,0,0,0.9);
    }
 
`

 