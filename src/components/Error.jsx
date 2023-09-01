import styled from '@emotion/styled';

const Texto = styled.div`
  background-color: #c70039;
  color: #fff;
  font-weight: 700;
  font-size: 24px;
  text-transform: uppercase;
  text-align: center;
  border-radius: 10px;
`;

function Error({ children }) {
  return <Texto>{children}</Texto>;
}

export default Error;
