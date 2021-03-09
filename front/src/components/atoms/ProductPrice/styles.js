import styled from 'styled-components';

export default styled.div`
  font-size: 1.7em;
  margin-right: ${props => props.shouldCenter ? 0 : 15}px;
`;
