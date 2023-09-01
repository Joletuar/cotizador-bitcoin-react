import styled from '@emotion/styled';

const Contenedor = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
`;
const Texto = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`;

const Imagen = styled.img`
  display: block;
  width: 120px;
`;

const Precio = styled.p`
  font-size: 30px;
  span {
    font-weight: 700;
  }
  &::after {
    content: '';
    width: 100%;
    height: 6px;
    background-color: #621515;
    display: block;
    margin: 10px auto 0 auto;
  }
`;

function Resultado({ resultado }) {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;

  return (
    <Contenedor>
      <Imagen
        src={`http://cryptocompare.com/${IMAGEURL}`}
        alt='imagen cripto'
      />
      <div>
        <Precio>
          El precio es de: <span>{PRICE}</span>
        </Precio>
        <Texto>
          El precio más alto del día: <span>{HIGHDAY}</span>
        </Texto>
        <Texto>
          El precio más bajo del día: <span>{LOWDAY}</span>
        </Texto>
        <Texto>
          Varación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span>
        </Texto>
        <Texto>
          Última actualización: <span>{LASTUPDATE}</span>
        </Texto>
      </div>
    </Contenedor>
  );
}

export default Resultado;
