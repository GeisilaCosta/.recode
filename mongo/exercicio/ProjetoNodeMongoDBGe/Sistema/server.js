const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;

const caminho = "mongodb://localhost/Escola";

MongoClient.connect(caminho, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) return console.error(err);
    db = client.db('Escola'); // Buscando no servidor MongoDB o banco Escola
});

// Rotas para a coleção "data"
app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/show', (req, res) => {
    db.collection('data').find().toArray((err, results) => {
        res.render('show.ejs', { data: results });
    });
});

app.post('/show', (req, res) => {
    db.collection('data').save(req.body, (err, result) => {
        res.redirect('/show');
    });
});

// ============================  ATUALIZA REGISTRO ==================================
app.route('/edit/:id')
.get((req, res) => {
    var id = req.params.id;
    db.collection('data').find(ObjectId(id)).toArray((err, result) => {
        if (err) return res.send(err);
        res.render('edit.ejs', { data: result });
    });
})
.post((req, res) => {
    var id = req.params.id;
    var name = req.body.name;
    var surname = req.body.surname;

    db.collection('data').updateOne({ _id: ObjectId(id) }, {
        $set: {
            name: name,
            surname: surname
        }
    }, (err, result) => {
        if (err) return res.send(err);
        res.redirect('/show');
        console.log('Atualizado no Banco de Dados');
    });
});
// ===================================================================================

// ======================= Apagando documento do banco de dados ======================
app.route('/delete/:id')
.get((req, res) => {
    var id = req.params.id;
    db.collection('data').deleteOne({ _id: ObjectId(id) }, (err, result) => {
        console.log('Deletado do Banco de Dados!');
        res.redirect('/show');
    });
});
// ====================================================================================

// Rotas para a coleção Aluno
app.route('/alunos')
.get((req, res) => {
    db.collection('Aluno').find().toArray((err, results) => {
        res.render('alunos.ejs', { alunos: results });
    });
})
.post((req, res) => {
    db.collection('Aluno').insertOne(req.body, (err, result) => {
        res.redirect('/alunos');
    });
});

// Rotas para a coleção Professor
app.route('/professores')
.get((req, res) => {
    db.collection('Professor').find().toArray((err, results) => {
        res.render('professores.ejs', { professores: results });
    });
})
.post((req, res) => {
    db.collection('Professor').insertOne(req.body, (err, result) => {
        res.redirect('/professores');
    });
});

// Rotas para a coleção Curso
app.route('/cursos')
.get((req, res) => {
    db.collection('Curso').find().toArray((err, results) => {
        res.render('cursos.ejs', { cursos: results });
    });
})
.post((req, res) => {
    db.collection('Curso').insertOne(req.body, (err, result) => {
        res.redirect('/cursos');
    });
});

// Rotas para a coleção Notas
app.route('/notas')
.get((req, res) => {
    db.collection('Notas').find().toArray((err, results) => {
        res.render('notas.ejs', { notas: results });
    });
})
.post((req, res) => {
    db.collection('Notas').insertOne(req.body, (err, result) => {
        res.redirect('/notas');
    });
});

// Rotas para a coleção Turma
app.route('/turmas')
.get((req, res) => {
    db.collection('Turma').find().toArray((err, results) => {
        res.render('turmas.ejs', { turmas: results });
    });
})
.post((req, res) => {
    db.collection('Turma').insertOne(req.body, (err, result) => {
        res.redirect('/turmas');
    });
});

app.listen(3005, function() {
    console.log('Server rodando na porta 3005');
});
