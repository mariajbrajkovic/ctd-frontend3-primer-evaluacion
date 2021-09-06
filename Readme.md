# Anotaciones sobre Primer evaluación entregable de Front-end III para C.T.D.
**María Julia Brajkovic**

Razonamientos llevados adelante para la creación del código:

- Constructor:
  Creo el constructor. Yo tengo que saber la selección anterior para mostrarla y sumarla al historial, y por dónde va la historia para ver por cual índice del data debería continuar, por eso el contador y la seleccionAnterior.
  Además hacemos uso de props y de estados (como lo pide la consigna).

- Como parte del ciclo de vida, decido usar update para que vaya modificando el historial a medida que se va actualizando la seleccionAnterior.

- Quiero manejar el evento click del formulario, entonces uso handleClick. Voy a querer que, dependiendo de la selección, el contador se vaya moviendo según el índice en el json. Inicialmente había cometido el error de recorrerlo entero, pero lo solucioné dándole diferentes valores al contador, de manera que no pase por todos los índices.

:exclamation: Si elijo A pero previamente no lo había elegido, corresponde pasar al índice siguiente, por lo cual le sumo 1.

:exclamation: Si elijo A y previamente lo había elegido, corresponde pasar dos índices, por lo cual le sumo 2.

:exclamation: Si elijo B pero previamente había elegido A, corresponde pasar tres índices (ejemplo: si estaba en 2a, debo pasar a 2b, 3a y por último 3b, lo cual da 3), por lo cual le sumo 3.

:exclamation: Si elijo B y previamente lo había elegido o no había elegido nada (al inicio), corresponde pasar por dos índices, por lo cual le sumo 2.

- Creo 3 clases: una que tenga la información principal (Principal), otra que contendrá las opciones (Opciones), y una tercera que contendrá el historial (Anteriores).

- Renderizo utilizando las clases creadas.

- Se respeta el formato CSS pedido.