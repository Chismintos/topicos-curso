# Ejemplo de eventos

En este ejemplo se mostrará como inyectar elementos HTML desde JavaScript

El ejercicio consiste en que hagas una aplicación web que sea capaz de convertir divisas.

1. Pesos a Dólares

Como tip deberás crear elementos `input`

Para poder obtener el valor:

```
const entrada = document.createElement('input')
```

Una vez creado el elemento inyectarlo al HTML, después crear el botón para posteriormente obtener el valor que el usuario proporciona para procesarlo.

Para adquirir la información del input usa:

```
const valorInput = document.querySelector('button').value
```

Cuando se agrega la palabra `value` se obtiene el valor que ingresa el usuario, si no se agrega, se obtiene el objeto.
