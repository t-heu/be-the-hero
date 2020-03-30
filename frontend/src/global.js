import styled, { css, createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  
  html, body, #root {
    height: 100%;
  }

  body {
    font: 400 14px Roboto, sans-serif;
    background-color: #f0f0f5;
    -webkit-font-smoothing: antialiased;
  }

  input, button, textarea {
    font: 400 18px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }
  
  form input, form textarea {
    width: 100%;
    height: 60px;
    color: #333;
    border: 1px solid #dcdce6;
    border-radius: 8px;
    padding: 0 24px;
  }
  
  form textarea {
    min-height: 140px;
    line-height: 24px;
    resize: vertical;
    padding: 16px 24px;
  }
`

export const ButtonD = styled.button`
  width: 100%;
  height: 60px;
  background-color: #e02041;
  border: 0;
  color: #fff;
  border-radius: 8px;
  font-weight: 700;
  margin-top: 16px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
  transition: filter 0.2s;

  :hover {
    filter: brightness(90%);
  }
`;

export const ButtonD2 = css`
  width: 100%;
  height: 60px;
  background-color: #e02041;
  border: 0;
  color: #fff;
  border-radius: 8px;
  font-weight: 700;
  margin-top: 16px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
  transition: filter 0.2s;

  :hover {
    filter: brightness(90%);
  }
`;

export const Lin = styled.div`
  a {
    display: flex;
    align-items: center;
    margin-top: 40px;
    color: #41414d;
    font-size: 18px;
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.2s;
  
    svg {
      margin-right: 8px;
    }
  }
  
  :hover {
    opacity: 0.8s;
  }
`;