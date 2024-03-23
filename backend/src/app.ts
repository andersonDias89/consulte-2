import express from 'express';
import { AppDataSource } from './data-source';
import { Medico } from './entity/Medico';

const app = express();
const port = 4000; // Ou outra porta de sua escolha

app.use(express.json());

AppDataSource.initialize().then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
}).catch(error => console.log(error));

// Rota para buscar todos os médicos
app.get('/medicos', async (req, res) => {
    const medicoRepo = AppDataSource.getRepository(Medico);
    const medicos = await medicoRepo.find();
    res.json(medicos);
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
