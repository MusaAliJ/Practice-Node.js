const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type' , 'text/plain');
    next();
})

.get((req, res, next)=>{
    res.end('Sending all promotions to you');
})

.post((req, res, next)=>{
    res.end('Will add' + req.body.name + 'with: ' +req.body.name);
})
.put((req,res,next)=>{
    res.end('put opertation is not supported');
})
.delete((req,res,next)=>{
    res.end('deleting all the promotions');
})
promoRouter.route('/:promoId')
.get((req, res, next)=>{
    res.end('Sending promotion: ' + req.params.promoId);
})
.post((req,res, next)=>{
    res.end('Post operation is not supported');
})
.put((req, res, next)=>{
    res.write('Updating promotions: ' + req.params.promoId);
    res.end('Willl update the promotion ' + req.body.name + ' with details ' + req.body.description);
})
.delete((req, res, next)=>{
    res.end('Deleting promotion: ' + req.params.promoId)
})

module.exports = promoRouter;