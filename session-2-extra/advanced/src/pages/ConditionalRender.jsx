import { useState } from 'react';

function ConditionalRender() {
  const [booleano, setBooleano] = useState(true);

  return (
    <div>
      <button onClick={() => setBooleano(!booleano)}>Cambiar booleano</button>

      {booleano && (
        <div>
          <p>Booleano es verdadero</p>
          <p>Esto es multi linea</p>
        </div>
      )}

      {booleano ? (
        <h3>La condición es Verdadera</h3>
      ) : (
        <h3>La condición es Falsa</h3>
      )}

      {(() => {
        if (booleano) {
          return (
            <div>
              <p>Booleano es verdadero</p>
              <u>Esto está en otra linea de código</u>
            </div>
          );
        } else {
          return (
            <div>
              <p>Booleano es Falso</p>
              <u>Esto está en otra linea código</u>
            </div>
          );
        }
      })()}
    </div>
  );
}

export default ConditionalRender;
