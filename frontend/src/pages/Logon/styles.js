import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media(max-width: 480px) {
    flex-direction: column;
    justify-content: center;
    padding: 1em;
    height: auto;
    
    img {
      width: 200px;
    }
  }
 `;
 
export const Form = styled.section`
  width: 100%;
  max-width: 350px;
  margin-right: 30px;
  
  form {
    margin-top: 100px;
    
    h1 {
      font-size: 32px;
      margin-bottom: 32px;
    }
  }
  /*680px 480px*/
  @media(max-width: 680px) {
    display: flex;
    flex-direction: column;
    margin: auto;
    align-items: center;
    justify-content: center;
    
    form {
      margin-top: 30px;
      
      h1 {
        font-size: 22px;
        margin-bottom: 20px;
      }
    }
  }
`;