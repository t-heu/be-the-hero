import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .content {
    width: 100%;
    padding: 96px;
    background-color: #f0f0f5;
    box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .content section {
    width: 100%;
    max-width: 380px;
  }
  
  .content section h1 {
    margin: 64px 0 32px;
    font-size: 32px;
  }
  
  .content section p {
    font-size: 18px;
    color: #737380;
    line-height: 32px;
  }
  
  .content form {
    width: 100%;
    max-width: 450px;
  }
  
  .content form input {
    margin-top: 8px;
  }
  
  .content form .input-group {
    display: flex;
  }
  
  /* adicionar estilização em todo input que tenha um input antes */
  
  .content form .input-group input + input {
    margin-left: 8px;
  }
  
  @media(max-width: 680px) {
    height: auto;
    flex-direction: column;
    justify-content: center;
      
    .content {
      padding: 1em;
      flex-direction: column;
      justify-content: center;
    }
  }
`
