/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);

	console.log('Desafio 002 - starts ...');
	
	const nome1:string = 'ubunru silva';
	const idade1:number = 33;
	const peso1:number = 88.50;
	const altura1:number = 1.65;
	const imcubuntuone = peso1/(altura1*altura1);
	const endev1:boolean = true;

	const nome2:string = 'ubunru silva';
	const idade2:number = 33;
	const peso2:number = 88.50;
	const altura2:number = 1.65;
	const imcubuntutwo = peso2/(altura2*altura2);
	const endev2:boolean = true;

	const nome3:string = 'ubunru silva';
	const idade3:number = 33;
	const peso3:number = 88.50;
	const altura3:number = 1.65;
	const imcubuntuthree = peso3/(altura3*altura3);
	const endev3:boolean = true;

	console.log(nome1, idade1, peso1, altura1, imcubuntuone, endev1);
	console.log(nome2, idade2, peso2, altura2, imcubuntutwo, endev2);
	console.log(nome3, idade3, peso3, altura3, imcubuntuthree, endev3); 

});
