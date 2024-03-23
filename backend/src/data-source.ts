import "reflect-metadata";
import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { Medico } from "./entity/Medico"; // Importe sua entidade

dotenv.config();

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [
        Medico, // Referencie sua entidade aqui
        // Se tiver mais entidades, elas também devem ser listadas aqui
    ],
    synchronize: true,
    logging: false,
});
