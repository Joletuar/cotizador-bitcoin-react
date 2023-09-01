import styled from '@emotion/styled';
import useSelectMonedas from '../hooks/useSelectMonedas';
import { monedas } from '../data/monedas';
import { useEffect, useState } from 'react';
import Error from './Error';

const InputSubmit = styled.input`
  background-color: #730707;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    cursor: pointer;
    background-color: #930a0a;
  }
`;

function Formulario({ setMonedas }) {
  const [criptos, setCriptos] = useState([]);
  const [error, setError] = useState(false);

  // Obtenemos las funciones que devuelven nuestro Hooks
  const [moneda, SelectMonedas] = useSelectMonedas('Elige tu moneda', monedas);
  const [cripto, SelectCriptomoneda] = useSelectMonedas(
    'Elige tu criptomoneda',
    criptos
  );

  useEffect(() => {
    const consultarAPI = async () => {
      const url = import.meta.env.VITE_API_URL;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      const arrayCriptos = resultado.Data.map((crypto) => {
        const objeto = {
          id: crypto.CoinInfo.Name,
          nombre: crypto.CoinInfo.FullName,
        };
        return objeto;
      });
      setCriptos(arrayCriptos);
    };

    consultarAPI();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([moneda, cripto].includes('')) {
      setError(true);
      return;
    }

    setError(false);
    setMonedas({
      moneda,
      cripto,
    });
  };

  return (
    <>
      {error && <Error>Complete todos los campos</Error>}

      <form onSubmit={handleSubmit}>
        <SelectMonedas />

        <SelectCriptomoneda />

        <InputSubmit type='submit' value='Cotizar' />
      </form>
    </>
  );
}

export default Formulario;
