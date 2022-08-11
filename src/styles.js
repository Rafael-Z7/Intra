import styled from "styled-components";
import './index.css';
 
export const Main_container = styled.div`
    width: 100%;
    height: 83%;
    display: flex;

    #desenho_container{ 
        width: 38vw;
        height: 56vh;
        align-self: start;  
        margin-left: 5%;
    }

    #desenho_container img{
        width: 34vw;
        height: 51,69vh;  
    }

    #right{
        width: 54%;
        display: flex;
        flex-direction: column;
        align-content: space-around;
    }

    #transf_container{
    
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #transf_button:hover{
        cursor: pointer;
    }

    #transf_button{
        font-family: 'century-gothic';
        font-weight: bolder;
        font-size: 0.9rem;
        width: 35%;
        height: 20%;
        background-color: red;
        margin-left: 25%;
        border-radius: 30px;
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: flex-start;
        background-color: #BA1F45;
        color: #f2f2f2;
        font-weight: 9px;

        > span {
            margin-left: .5vw;
        }
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
        width: 6.2vw;
        height: 15.33vh;
        margin-right: 8%;
       
    }

    .item_down:hover{
        cursor: pointer;
    }

  

    .image_down img{
        width: 100%;
        height: 100%;
 
    }

    .item_down input{
        width: 100%;
        outline: none;
    }

    .title_down{
        width: 100%;
        font-family: gill-sans-mt;
        color: white;
        font-size: 1rem;
        font-weight: 1000;
        text-align: center;
        height: 21.49%;
    }

    #chamado_id{
         margin-left: 33%;
    }


    @media (max-width: 1334px){
        #desenho_container{ 
            width: 45vw;
            height: 56vh;
            align-self: start;  
            margin-left: 5%;
        }
    }
    
    @media (max-width: 1076px){
        #desenho_container{ 
            width: 40vw;
            height: 51vh;
        }
    }

    @media (max-width: 1039px){
        #desenho_container{ 
            width: 39vw;
            height: 50vh;
        }
    }

    @media (max-width: 961px){
        #desenho_container{ 
            width: 35vw;
            height: 45vh;
        }
    }

    @media (max-width: 1341px){
        #transf_button{
             width: 300px;
        }
    }

  


`

 

