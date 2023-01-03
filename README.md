# React-FreeCodeCamp-ESP

Aprendiendo React con el canal de YouTube de FreeCodeCamp en español. Los proyectos siguen el video: https://www.youtube.com/watch?v=6Jfk8ic3KVk.

## 02 Contador de clics

Crear un contador de clic: tutorial de https://www.youtube.com/watch?v=6Jfk8ic3KVk&t=13923s

1.1 Qué aprendí:

- Usar props.children para pasar datos a componentes.
  - Se declara el componente con **_dos etiquetas_** una de apertura y otra de cierre.

_Para el componente Padre:_

```js
<BotonClear>Clear</BotonClear>
```

_Para el Componente hijo:_

```js
const BotonClear = (props) => <div>{props.children}</div>;
```

- Usar template literals para crear clases condicionales en los botones.
  - usar el metodo trimend para quitar espacios vacios.

```js
<div
  className={`boton-contenedor ${
    esOperador(props.children) ? "operador" : ""
  }`.trimEnd()}
></div>;
const esOperador = (valor) => {
  return isNaN(valor) && valor != "." && valor != "=";
};
```

- Uso de propiedad Flex:1 1; para permitir que los elementos se acomoden y tomen espacios equitativos.

```css
.boton-contenedor {
  display: flex;
  flex: 1 1;
  justify-content: center;
  align-items: center;
}
```

- Definir un componente como const y función flecha.
  - Normalmente se usa cuando el componente es sencillo. Lo más común es definir un componente con la palabra function.

_Declarar componente pantalla:_

```js
const Pantalla = ({ input }) => <div className="input">{input}</div>;
```

_Declarar componente Boton:_

```js
function Boton(props) {}
```

- Cuando se pasa un función como un prop se puede hacer directamente en la línea de llamado del componente (ver BotonClear en App.jsx)
  - Tener cuidado que al pasar una función como un prop se generan dos opciones. Una es hacer el llamado a la funcion con ( ) y otra es la ejecucion literal de la funcion anónima a través del nombre del prop que se pasó; en este caso no se colocan ( ).

_Ejecurar la función asociada al prop manejarClear_

```js
/* NOTA: NO se requieren () luego del prop manejarClear */
const BotonClear = (props) => (
  <div onClick={props.manejarClear}>{props.children}</div>
);
```

_Llamar la función asociada al prop manejarClear_

```js
/* NOTA: Si se usan () luego del prop manejarClear (este es el llamado) y se debe usar una función flecha para ejecutar la función que espera el onClic*/
const BotonClear = (props) => (
  <div onClick={() => props.manejarClear()}>{props.children}</div>
);
```

- Ver que el event listener onClick espera una función (diferente al llamado de una función) entonces se usa una funcion flecha que ejecuta la función que se pasó como prop al componente.

```js
/* NOTA: ver que se está pasando prop.children al argumento de la función */
function Boton(props) {
  return (
    <div onClick={() => props.manejarClic(props.children)}>
      {props.children}
    </div>
  );
}
```

- Importar libreria MathJS para evaluar operaciones con base en una cadena de texto.

```js
import { evaluate } from "mathjs";

const calcularResultado = () => {
  setInput(evaluate(input));
};
```
