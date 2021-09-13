
const router = require("express").Router();

const {
  inicio,
  editar,
  edit,
  agregarImagen,
  claudy,
 categorias

} = require("../controllers/img.controller");

// Routes

router.get("/", inicio);
router.get('/users/a/editar/:_id', editar);

router.get('/users/a/:_id/:public_id',edit);
router.get("/users/a", agregarImagen);
router.post("/users/a",claudy);
router.post('/users/a/categoria/:id', categorias);

module.exports = router;


