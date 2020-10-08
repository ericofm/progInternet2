const restify = require('restify');
const errors = require('restify-errors');

const servidor = restify.createServer({
    name: 'lojinha',
    version: '1.0.0'
});

servidor.use( restify.plugins.acceptParser(servidor.acceptable) );
servidor.use( restify.plugins.queryParser() );
servidor.use( restify.plugins.bodyParser() );

servidor.listen(8001 , function(){
    console.log("%s executando em %s", servidor.name, servidor.url);
});

var knex = require('knex')({
    client: 'mysql' ,
    connection: {
        host: 'localhost' ,
        user: 'root' ,
        password: '' ,
        database: 'api_rest'
    }
});

servidor.get('/produtos' , (req, res, next) => {
    knex('tbl_produtos').then( (dados) =>{
        res.send( dados );
    } , next ); 
});

servidor.post('/produtos/add' , (req, res, next) => {
    knex('tbl_produtos').insert([{nome: 'Cabo', preco: '25.0'}])
    .then( (dados) =>{
        res.send( dados );
    } , next );
});

servidor.get('/produtos/:id' , (req, res, next) => {
    const id = req.params.id;
    knex('tbl_produtos')
        .where( 'id' , id )
        .first()
        .then( (dados) => {
            if( !dados )  {
                return res.send( new errors.BadRequestError('Este produto não foi encontrado'));
            }
            res.send(dados);
        }, next);
});

servidor.put('/produtos/update/:id', (req, res, next) => {
    const id = req.params.id;
    knex('tbl_produtos')
        .where( 'id' , id )
        .update( req.body )
        .then( (dados) => {
            if( !dados )  {
                return res.send( new errors.BadRequestError('Este produto não foi encontrado'));
            }
            res.send(dados);
        }, next);
});

servidor.del('/produtos/delete/:id', (req, res, next) => {
    const id = req.params.id;
    knex('tbl_produtos')
        .where( 'id' , id )
        .delete()
        .then( (dados) => {
            if( !dados )  {
                return res.send( new errors.BadRequestError('Este produto não foi encontrado'));
            }
            res.send(dados);
        }, next);
});