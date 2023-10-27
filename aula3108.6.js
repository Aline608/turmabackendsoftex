const readline = require('readline-sync');

const horarioInicio = readline.question("Digite o horário de início (hora:minuto:segundo): ");
const partesHorario = horarioInicio.split(":");
const horaInicio = parseInt(partesHorario[0]);
const minutoInicio = parseInt(partesHorario[1]);
const segundoInicio = parseInt(partesHorario[2]);

const duracaoSegundos = parseInt(readline.question("Digite a duração da experiência em segundos: "));

const totalSegundosInicio = horaInicio * 3600 + minutoInicio * 60 + segundoInicio;
const totalSegundosTermino = totalSegundosInicio + duracaoSegundos;

const horaTermino = Math.floor(totalSegundosTermino / 3600);
const minutosRestantes = totalSegundosTermino % 3600;
const minutoTermino = Math.floor(minutosRestantes / 60);
const segundoTermino = minutosRestantes % 60;

console.log(`O horário de término da experiência é: ${horaTermino}:${minutoTermino}:${segundoTermino}`);
