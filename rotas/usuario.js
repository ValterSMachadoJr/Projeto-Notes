const { Router } = require("express");
const {criar, listar} = require("../controller/usuario");
const router = Router();

//devolver uma lista ou um objeto
router.get('/', async (req, res) => {
    try{
        const usuarios = await listar();
        res.send(usuarios);
    } catch (erro){
        console.log(erro);
        res.status(500).send({erro});
    }
});
//criar um novo recurso
router.post('/', async (req, res) => {
    try{
       const {nome, email, senha} = req.body;
        const usuarioCriado = await criar(nome, email, senha);  
       res.send(usuarioCriado);
    } catch (erro){
        res.status(500).send({erro});
    }
   
});

// atualizar um recurso existente
router.put('/:id', (req, res) => {
   let id = req.params.id;
    res.send("Rota para atualizar o recurso " + id);
});

// remover um recurso existente
router.delete('/:id', (req, res) => {
    let id = req.params.id;
    res.send("Rota para remover o recurso " + id);
});

module.exports = router;