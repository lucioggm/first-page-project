import { Router } from "express";
const router = Router();

//direcciones
router.get("/", (req, res) => res.render("index",{title: "First Website with Node"}));

router.get("/about", (req, res) => res.render("about",{title: "About me"}));

router.get("/contact", (req, res) => res.render("contact",{title: "Pagina de Contacto"}));


export default router