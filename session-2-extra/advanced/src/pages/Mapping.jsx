import { useState } from 'react';

function Mapping() {
  const [arreglo, setArreglo] = useState([]);

  return (
    <div>
      <h1>Mapping</h1>

      <input
        type="text"
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            setArreglo([...arreglo, event.target.value]);
            event.target.value = '';
          }
        }}
      />

      {arreglo.map((element) => {
        
        return <p key={crypto.randomUUID()}> {element} </p>;
      })}
    </div>
  );
}

export default Mapping;
