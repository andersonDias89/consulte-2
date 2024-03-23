import { AppDataSource } from "./data-source";
import { Medico } from "./entity/Medico";

AppDataSource.initialize().then(async () => {
    console.log("Conexão com o banco de dados estabelecida com sucesso.");
    const medicoRepo = AppDataSource.getRepository(Medico);
    const medicos = await medicoRepo.find();
    console.log("Médicos encontrados:", medicos);
}).catch(error => console.log("Erro ao conectar com o banco de dados:", error));
