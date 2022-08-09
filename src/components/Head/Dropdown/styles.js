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
        display: flex;
        flex-direction:  column;
        background-color: white;
        list-style: none;
    }

    .dropTrue li{
        width: 100%;
        text-align: center;  
    }


`

 