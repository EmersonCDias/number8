import styled from 'styled-components';

export default styled.div`
  max-width: ${({ large }) => large ? 300 : 150}px;
  position: relative;

  img {
    width: 100%;
  }
  
  span {
    display: flex;
    justify-content: space-around;
    position: absolute;
    width: 100%;
    bottom: 15px;
    
    div {
      background: red;
      padding: 10px;
      color: #fff;
    }
  }
`;
