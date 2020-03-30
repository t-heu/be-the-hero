import styled from 'styled-components';
import { Link } from 'react-router-dom'

import { ButtonD2 } from '../../global'

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;
  
  header {
    display: flex;
    align-items: center;
    
    p {
      font-size: 20px;
      margin-left: 24px;
    }
   
    img {
      height: 64px;
      margin-right: 24px;
    }
    
    a {
      width: 260px;
      margin-left: auto;
      margin-top: 0;
    }
  
    button {
      height: 60px;
      width: 60px;
      border-radius: 4px;
      border: 1px solid #dcdce6;
      background: transparent;
      margin-left: 16px;
      transition: border-color 0.2s;
      
      :hover {
        border - color: #999;
      }
    }
  }
  
  h1 {
    margin-top: 80px;
    margin-bottom: 24px;
  }
  
  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px;
    list-style: none;
    
    li {
      background: #fff;
      padding: 24px;
      border-radius: 8px;
      position: relative;
      
      button {
        position: absolute;
        right: 24px;
        top: 24px;
        border: 0;
        background: none;
        
        :hover {
          opacity: 0.8;
        }
      }
      
      strong {
        display: block;
        margin-bottom: 16px;
        color: #41414d;
      }
        
      p + strong {
        margin-top: 32px;
      }
        
      p {
        color: #737380;
        line-height: 21px;
        font-size: 16px;
      }
    }
  }
  
  @media(max-width: 680px) {
    margin: 10px 0;
    
    h1 {
      margin-top: 25px;
    }
    
    header {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 14px;
      justify-items: center;
      align-items: center;
      text-align: center;
    
      a {
        margin: 0;
        font-size: 15px;
      }
      
      img {
        width: 150px;
      }
      
      p {
        font-size: 10px;
      }
      
      button {
        margin-left: 0;
      }
    }
    
    ul {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export const StyledLink = styled(Link)`
  ${ButtonD2}
`;