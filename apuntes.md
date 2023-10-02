# Apuntes de typescript

## Instalación de typescript

npm install -g typescript

## Para compilar typescript

Cuando trabajamos con typescript creamos archivos que tienen extesión ts. Es necesario pasarlo a js y para eso utilizamos el comendo tsc.
Por ejemplo si tenemos el archivo index.ts y lo queremos pasar a js ponemos:

```bash
tsc index.ts

```

#### Hacerlo más fácil dentro del proyecto

Para esto utilizamos node creando un package.json

```bash
npm init -y 

```

Nos va a crear el package.json y ahi colocamos en script:

```json

"start": "tsc index.ts && node index.js",

```
para ver si funciona colocamos:


```bash
npm run start
```

Ahora modificamos el packages.json para que genere un dist a un archivo llamado types.ts que está en la carpeta basics

```json 
"start:types": "tsc basics/types.ts --outdir dist/ && node dist/types.js",
```

*typescript* infiere datos



## Tipos de datos

string
number
boolean
object
Array<type>



