-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

-- BANCO DE DADOS PROJETO INDIVIDUAL
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

create table jogo(
idJogo int primary key auto_increment,
nome varchar(45));



create table corrida(
idCorrida int primary key auto_increment,
andarAlcancado int,
inimigosDerrotados int,
danoTotalCausado float,
danoTotalRecebido float,
totalAtaquesBasicos int,
totalAtaquesEspeciais int,
totalAtaquesCriticos int,
qtdAres int,
qtdZeus int,
qtdPoseidon int,
fkUsuario int,
	constraint usuarioxcorrida
		foreign key (fkUsuario) references usuario(idUsuario),
fkJogo int,
	constraint jogoxcorrida
		foreign key (fkJogo) references jogo(idJogo)
);



create user 'jorge'@'%' identified by '2681';
grant all on projetoIndividual.* to 'jorge'@'%';
flush privileges;
select * from usuario;
select * from corrida;

select * from corrida
	join usuario on idUsuario=fkUsuario;
    
    select idCorrida from corrida where fkUsuario = 5 order by idCorrida desc limit 1;