import styled from "styled-components";
import './index.css';
export const Header = styled.div`
    width: 100%;
    height: 17%;
    display: flex;
 

    .intranetLogo {
         width: 19%;
         height: 12.3vh;
    }

    .intranetLogo img {
        width: 100%;
        height: 100%;
   }

    #nav{
        width: 80%;
        display: flex;
        flex-direction: row;
     
    }

    .menu_items{
        width: 10.6vw;
        height: 8.5vh;
        margin-left: 1.1vw;
        margin-top: 2.2%;
        
    }
    
    .item_inside{
        width: 100%;
        height: 100%;
    }

    .item_inside .arrow{
        width:100%;
        height: 33%;
        display: flex;
        align-items: flex-end;
        justify-content: center;
      
    }

    .item_inside .container_button{
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
    }

    .item_inside .container_button:hover{
        cursor: pointer;
    }
 
    .item_inside .container_button img{
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
    
`;

export const Portal = styled.div`

width: 5.6vw;
height: 13.5vh;
display: flex;
align-items: flex-end;
justify-content: center;
flex-direction: column;
margin-left: 3vw;
margin-top: 3vh;
 
 
    #image_portal{
        width: 5.4vw;
        height: 75%;
       
    }

    #image_portal img{
        width: 100%;
        height: 100%;
    }

    #text_box{
        width: 100%;
        height: 33%;
 
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #text_box h2{
        font-family: 'century-gothic' ;
        color: black;
        font-size: 15pt;
        font-weight: 1000;
    }


`

export const Arrowdown = styled.div`

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

export const Main_container = styled.div`
    width: 100%;
    height: 83%;
    display: flex;


  

    #desenho_container{
        width: 38vw;
        height: 54,69vh;
        align-self: start;  
        margin-left: 5%;
    }

    #right{
        width: 54%;
        display: flex;
        align-items: flex-end;
 
    }

    #right img{
       width: 100%;
       height: 100%;

    }

    #left{
        width: 46%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #menu_down{
        display: flex;
  
        width: 26.70vw;
        height: 71.91vh;
        flex-wrap: wrap;
 

    }

    .item_down{
        width: 6.6vw;
        height: 15.73vh;
        margin-right: 8%;
    }

    .image_down{
        width: 100%;
        height: 78.21%;
 
       
    }

    .image_down img{
        width: 100%;
        height: 100%;
    }

    .title_down{
        width: 100%;
        font-family: century-gothic;
        color: white;
        font-size: 1.2rem;
        font-weight: 1000;
        text-align: center;
        height: 21.49%;
    }

    #chamado_id{
         margin-left: 33%;
    }


`

