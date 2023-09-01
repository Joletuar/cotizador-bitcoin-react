import styled from '@emotion/styled';
import { useState } from 'react';

const Label = styled.label`
  color: #fff;
  display: block;
  font-size: 24px;
  font-weight: 700;
  margin: 15px 0;
`;

const Select = styled.select`
  width: 100%;
  font-size: 18px;
  padding: 14px;
  border-radius: 10px;
  margin-bottom: 25px;
`;

function useSelectMonedas(label, opciones) {
  const [state, setState] = useState('');

  const selectMondedas = () => {
    return (
      <>
        <Label>{label}</Label>
        <Select
          name='moneda'
          id='moneda'
          value={state}
          onChange={(e) => setState(e.target.value)}
        >
          <option value=''>--- Seleccione ---</option>
          {opciones.map(({ id, nombre }) => (
            <option key={id} value={id}>
              {nombre}
            </option>
          ))}
        </Select>
      </>
    );
  };

  // Retornamos un arreglo
  return [state, selectMondedas];
}

export default useSelectMonedas;
