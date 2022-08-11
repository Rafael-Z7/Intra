import styled from "styled-components";
import '../../../index.css';

export const HeaderTag = styled.div`
    width: 100%;
    height: 17%;
    display: flex;
 

    .intranetLogo {
         width: 19%;
         height: 12.3vh;
    }

    .intranetLogo input {
        width: 100%;
        height: 100%;
        outline:none;
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
        outline: none;
     
    }

    .container_button h2{
        outline: none;
 
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
        outline: none;
       
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
        font-family: 'century-gothic';
        color: black;
        font-size: 15pt;
        font-weight: bolder;
        color: black;
    }

   

    @media (max-width: 1374px){
        #image_portal{
           width: 80px;
           
        }
    }

`
 