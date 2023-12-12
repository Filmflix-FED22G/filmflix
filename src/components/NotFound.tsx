import styled from 'styled-components';
import { useEffect } from 'react';

function NotFound() {
  useEffect(() => {
    document.title = '404 Not Found';
  });

  return (
    <StyledNotFound>
      <Styledh1>404 Not Found :(</Styledh1>
    </StyledNotFound>
  );
}

export default NotFound;

const StyledNotFound = styled.div`
  height: 70vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Styledh1 = styled.h1`
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;