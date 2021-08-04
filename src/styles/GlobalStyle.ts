import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    @font-face {
        font-family: 'GmarketSansMedium';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    body * {
        z-index: 1;
        /* background-color: #fff; */
        margin: 0;
        padding: 0;
        color: #27282a;
        font-family: 'GmarketSansMedium';
    }
    
    input {
        width: 100%;
        border: none;
        height: 50px;
        padding: 0 20px;
        margin-bottom: 10px;
        background-color: #fff;
        border: none;
        border-radius: 10px;
        font-size: 16px;
        box-sizing: border-box;
        color: #27282a;
    }
    
    input:focus {
        color: black;
        //input 박스 테두리
        outline: none;
    }
    
    textarea:focus {
        outline: none;
    }
    
    select:focus {
        outline: none;
    }
    
    button {
        color: white;
        background-color: #4b81e7;
        padding: 10px;
        border-radius: 20px;
        border: none;
        width: 100%;
    }
    
    @media screen and (min-width: 769px) {
        body {
        // font-size: 20px;
    
        margin: 0;
        padding: 0;
        .wrapper {
            margin: 0 auto;
            height: 100vh;
            max-width: 480px;
    
            -webkit-box-shadow: 0px 0px 22px -2px rgba(0, 0, 0, 0.75);
            -moz-box-shadow: 0px 0px 22px -2px rgba(0, 0, 0, 0.75);
            box-shadow: 0px 0px 22px -2px rgba(0, 0, 0, 0.75);
        }
    
        /* background: #f6f6f6 !important; //html배경색상은 고정 */
        }

        .cardList{
            max-width: 430px;
        }
        .top{
            width: 430px;
        }
    }
    
    // 앱
    @media screen and (max-width: 768px) {
        body {
        // font-size: 16px;
        // border:1px solid red;
        /* background: white; */
        overflow: hidden;
        margin: 0;
        padding: 0;
        .wrapper {
            // max-width:430px;
            height: 100vh;
            width: 100%;
            margin: 0 auto;
            // margin-left:50%;
            // border:1px solid #efefef;
        }
        }
        .cardList{
            max-width: 100%;
        }
        .top{
            width: 380px;
        }
    }
    
    .wrap {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;
    }
    
    .padding {
        padding: 20px;
    }
  
`;

export default GlobalStyle;
