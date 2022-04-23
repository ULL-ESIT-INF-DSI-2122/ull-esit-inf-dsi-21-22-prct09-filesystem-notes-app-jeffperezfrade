# Informe Práctica 9 - Aplicación de procesamiento de notas de texto

## 1. Introducción.
---
En esta práctica se implementa el **procesamiento de notas de texto mediante TypeScript**. Se podrá añadir, modificar, eliminar, listar e imprimir por consola notas de un *usuario* en concreto. Estas notas se encontrarán en la carpeta `database` en la raíz del proyecto, donde dentro encontraremos carpetas pertenecientes a cada *usuario* que ha guardado notas en **formato JSON**. Además, solo se podrá interactuar con la aplicación desde la línea de comandos.

## 2. Objetivos.
---
* Familiarizarse con la **API asíncrona** de Node.js para poder trabajar con sistemas de ficheros.
* Aprender a utilizar el **paquete yargs** para recibir parámetros por linea de comando y parsearlos.
* Aprender a utilizar el  **paquete chalk** el cual permite poner colores a los mensajes por consola.

## 3. Ejercicio.
---
El desarrollo del proyecto se encuentra en el directorio `./src` y los test unitarios en directorio`./tests`, ambos en la raíz del programa.

Se ha seguido una metodología **TDD** utilizando la herramienta **Mocha y Chai** donde se comprueba el correcto funcionamiento del código.

También se hace uso de la herramienta **Instambul** de Coveralls para obtener el porcentaje de cubrimiento de nuestro código.

Se cuenta con **3 GitHub Actions** para los *Tests*, el cubrimiento de código *(Coveralls)* y *Sonar Cloud*, estas actions se disparan cada vez que se haga un **push** al repositorio de la práctica.

## 4. Aplicación de procesamiento de notas de texto.
---
Los requisitos que debe cumplir la aplicación de procesamiento de notas de texto son los siguientes:

1. La aplicación de notas deberá permitir que múltiples usuarios interactúen con ella, pero no simultáneamente.
2. Una nota estará formada, como mínimo, por un título, un cuerpo y un color (rojo, verde, azul o amarillo).
3. Cada usuario tendrá su propia lista de notas, con la que podrá llevar a cabo las siguientes operaciones:

* Añadir una nota a la lista. Antes de añadir una nota a la lista se debe comprobar si ya existe una nota con el mismo título. En caso de que así fuera, deberá mostrarse un mensaje de error por la consola. En caso contrario, se añadirá la nueva nota a la lista y se mostrará un mensaje informativo por la consola.

* Modificar una nota de la lista. Antes de modificar una nota, previamente se debe comprobar que exista una nota con el título de la nota a modificar en la lista. Si existe, se procede a su modificación y se emite un mensaje informativo por la consola. En caso contrario, debe mostrarse un mensaje de error por la consola.

* Eliminar una nota de la lista. Antes de eliminar una nota, previamente se debe comprobar que exista una nota con el título de la nota a eliminar en la lista. Si existe, se procede a su eliminación y se emite un mensaje informativo por la consola. En caso contrario, debe mostrarse un mensaje de error por la consola.

* Listar los títulos de las notas de la lista. Los títulos de las notas deben mostrarse por la consola con el color correspondiente de cada una de ellas. Use el paquete `chalk` para ello.

* Leer una nota concreta de la lista. Antes de mostrar el título y el cuerpo de la nota que se quiere leer, se debe comprobar que en la lista existe una nota cuyo título sea el de la nota a leer. Si existe, se mostrará el título y cuerpo de la nota por la consola con el color correspondiente de la nota. Para ello, use el paquete `chalk`. En caso contrario, se mostrará un mensaje de error por la consola.

* Todos los mensajes informativos se mostrarán con color verde, mientras que los mensajes de error se mostrarán con color rojo. Use el paquete `chalk` para ello.

* Hacer persistente la lista de notas de cada usuario. Aquí es donde entra en juego el uso de la API síncrona de Node.js para trabajar con el sistema de ficheros:
  * Guardar cada nota de la lista a un fichero con formato JSON. Los ficheros JSON correspondientes a las notas de un usuario concreto deberán almacenarse en un directorio con el nombre de dicho usuario.
  * Cargar una nota desde los diferentes ficheros con formato JSON almacenados en el directorio del usuario correspondiente.

4. Un usuario solo puede interactuar con la aplicación de procesamiento de notas de texto a través de la línea de comandos. Los diferentes comandos, opciones de los mismos, así como manejadores asociados a cada uno de ellos deben gestionarse mediante el uso del paquete `yargs`.

**Ejercicio Resuelto:**

**Clase TextNotes:**
```ts

```

**Explicación de la clase TextNotes:**

He decidido realizar esta clase siguiendo el **patrón Singleton** ya que este es común en este tipo de ejercicios relacionado con ficheros ya que se tiene una única instancia.

* `import * as fs from 'fs';` es la importación de la API síncrona que proporciona Node.js.
* `import * as chalk from 'chalk';` es la importación del paquete `chalk`, el cual nos servirá para imprimir mensajes con colores por consola.

Tenemos el atributo privado estático `notes` ya que, como dijimos antes, estamos siguiendo el patrón **Singleton**.

* La función `getNotes()` se trata de una función pública estática, donde inicializamos la instancia de la clase. Además de indicarle el nombre del directorio `database` donde se va a guardar todas las carpetas de los usuarios y sus notas de texto.