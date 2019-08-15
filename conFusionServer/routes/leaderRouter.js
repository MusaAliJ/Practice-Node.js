const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req, res, next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type' , 'text/plain');
    next();
})
.get((req, res, next)=>{
    res.end('Sending all the leaders');
})
.post((req,res, next)=>{
    res.end('Will add Leader ' + req.body.name + 'with details ' + req.body.description);
})
.put((req,res,next)=>{
    res.end('Put operation is not supported');
})
.delete((req,res,next)=>{
    res.end('Deleting all the leaders');
})
leaderRouter.route('/:leaderId')
.get((req,res,next)=>{
    res.end('Sending leader: ' +req.params.leaderId);
})
.post((req,res,next)=>{
    res.end('Post operation is not supported');
})
.put((req,res,next)=>{
    res.write('Updating leader: ' + req.params.leaderId);
    res.end('Updating leader ' + req.body.name + 'with ' + req.body.description);
})
.delete((req,res,next)=>{
    res.end('Deleting leader: ' + req.params.leaderId)
})

module.exports = leaderRouter;