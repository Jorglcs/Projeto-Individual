-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

create database projetoIndividual;

use projetoIndividual;

-- criar tabelas

create table usuario(
	idUsuario int primary key auto_increment,
    nome varchar(30),
    nickname varchar(20),
    email varchar(30),
    senha varchar(15)
);

create table buff(
	idBuff int primary key auto_increment,
    nome varchar(45),
    descricao varchar(80) ,
    
    tipo varchar (10)
);

create table corrida(
idCorrida int primary key auto_increment,
andarAlcancado int,
inimigosDerrotados int,
danoTotalCausado float,
danoTotalRecebido float,
totalAtaquesBasicos int,
totalAtaquesEspeciais int,
totalAtaquesCriticos int,
fkUsuario int,
	constraint usuarioxcorrida
		foreign key (fkUsuario) references usuario(idUsuario)
);

create table corridaBuff(
	fkCorrida int,
    constraint corridaBuffxCorrida
		foreign key (fkCorrida) references corrida(idCorrida),
	fkBuff int,
    constraint corridaBuffxBuff
		foreign key (fkBuff) references buff(idBuff),
	quantidade int
);


-- inserir dados
insert into buff (nome,descricao,tipo ) values
('Fonte de cura','Recupera toda a vida','buff'),
('Coracao de centauro','Recebe 25 de vida máxima','buff'),
('Bencao de Zeus','Escolha uma entre tres bencaos de Zeus','Bencaos'),
('Bencao de Ares','Escolha uma entre tres bencaos de Ares','Bencaos'),
('Bencao de Poseidon','Escolha uma entre tres bencaos de Poseidon','Bencaos');