//equivalente a require
import express from "express";
import ejs from "ejs";
import {dirname,join} from "path";//join para concatenar direcciones
import { fileURLToPath } from "url";

import indexRoutes from "./routes/index.js";

const app=express();

//ruta absoluta dinamica
const __dirname= dirname(fileURLToPath(import.meta.url));
console.log("views",join(__dirname,"views"));
//caracteristicas del servidor, añade logica de programacion al html

app.set("views",join(__dirname, "views"));
app.set("view engine","ejs");
app.use(indexRoutes);

//para la carpeta de los estilos
app.use(express.static(join(__dirname,"public")));

//respuesta al servidor a la direccion inicial u otras rutas
//res.send para strings
//app.get("/",(req,res) => res.send("hello world"))
//res.reder para files ejs
/*
 en routes/index estas app.get... son replazdas por router.get...
app.get("/", (req, res) => res.render("index"));

app.get("/about", (req, res) => res.render("about"));

app.get("/contact", (req, res) => res.render("contact"));

*/
//usar el puerto 3000
app.listen(3000);
console.log("Server is listening on port", 3000);
