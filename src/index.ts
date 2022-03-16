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
	
	const userOne = {
		nome1:'ubuntu silva',
		idade1:35,
		peso1:90,
		altura1: 1.70,
		isDev1:true,
		isDev: function(){
			if(this.isDev1 === true) //=== EXATAMENTE IGUAL true;
			{
				console.log(this.nome1, "is a dev")
				return this.nome1;
			}
			else{
				return this.nome1 + "is not a dev";
			}	
		},
		isSilva:function()
		{
			if(this.nome1 === "ubuntu silva")
			{
				return this.nome1;
			}else{
				return "is not silva";
			}
		}
	}				

	const userTwo = {
		nome1: 'ubuntu santos',
		idade1:30,
		peso1:80.50,
		altura1:1.65,
		isDev1:true,
		isDev: function(){
			if(this.isDev1 === true)
			{
				//console.log(this.nome1, "is a dev")
				return this.nome1;
			}
			else{
				return this.nome1 + "is not a dev";
			}	
		},
		isSilva:function()
		{
			if(this.nome1 === "ubuntu silva")
			{
				return this.nome1;
			}else{
				return "is not silva";
			}
		}
	}		
	

	const userThree = {
		nome1: 'ubuntu silva',
		idade1: 28,
		peso1: 88,
		altura1: 1.80,
		isdev1: false,
		isDev:function()
		{
			if(this.isdev1 === true)
			{
				return this.nome1;
			}else{

				return this.nome1 + " is not a dev";
			}	
		},
		isSilva:function()
		{
			if(this.nome1 === "ubuntu silva")
			{
				return this.nome1;
			}else{
				return "is not silva";
			}
		}
	}		

	const imcubuntuone = (userOne.peso1 / (userOne.altura1 * userOne.altura1)); //imcUbuntuOne 
	const imcubuntutwo = (userTwo.peso1 / (userTwo.altura1 * userTwo.altura1)); //imcUbuntutwo
	const imcubuntuthree = (userThree.peso1 / (userThree.altura1 * userThree.altura1)); //imcubuntuthree

	console.log("Soma de idades: ", userOne.idade1 + userTwo.idade1 + userThree.idade1);
	console.log("Agrupamento de nomes: ",userOne.nome1, ",", userTwo.nome1, ",", userThree.nome1);
	console.log("média imc do silva: ", imcubuntuone );
	console.log("média imc do santos: ", imcubuntutwo );
	console.log("média imc do silva: ", imcubuntuthree );
	console.log("Devs: ", userOne.isDev(),"and", userTwo.isDev(), "and", userThree.isDev());
	console.log("sobrenome Silva: ",userOne.isSilva(), ",", userTwo.isSilva(), "and", userThree.isSilva() )	
}
);