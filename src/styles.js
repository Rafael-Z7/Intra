import styled from "styled-components";
import './index.css';
 
export const Main_container = styled.div`
    width: 100%;
    height: 83%;
    display: flex;

    #desenho_container{ 
        width: 34vw;
        height: 52vh;
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
        width: 40%;
        height: 20%;
        background-color: red;
        margin-left: 25%;
        border-radius: 30px;
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: center;
        background-color: rgb(255,102,0);
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

    .item_down:hover{
        cursor: pointer;
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

 

