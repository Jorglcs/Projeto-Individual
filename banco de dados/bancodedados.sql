-- BANCO DE DADOS PROJETO INDIVIDUAL
create database projetoIndividual;
use projetoIndividual;

create table usuario(
	idUsuario int primary key auto_increment,
    nome varchar(30),
    nickname varchar(20),
    email varchar(30),
    senha varchar(15)
);

-- criar tabelas
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
('Bencao de Poseidon','Escolha uma entre tres bencaos de Poseidon','Bencaos')
	;

create user 'jorge'@'%' identified by '2681';
grant all on projetoIndividual.* to 'jorge'@'%';
flush privileges;