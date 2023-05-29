create database silverwood;
use silverwood;

create table tipos_perno (
    idTipoPerno INT NOT NULL PRIMARY KEY, 
    nombre VARCHAR(20)
);

create table origen_compra(
    idOrigenCompra INT NOT NULL PRIMARY KEY,
    nombre VARCHAR(20)
);

create table pedidos(
    idPedido INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    cantidad INT NOT NULL,
    precio INT NOT NULL,
    tamanio INT NOT NULL,
    idTipoPerno INT NOT NULL,
    modelo VARCHAR(50),
    telefono VARCHAR(50),
    localidad VARCHAR(50),
    idOrigenCompra INT,
    envio boolean,
    costo_envio INT,
    FOREIGN KEY (idTipoPerno) REFERENCES tipos_perno(idTipoPerno),
    FOREIGN KEY (idOrigenCompra) REFERENCES origen_compra(idOrigenCompra)
);

insert into tipos_perno values(1, 'Tipo 1');
insert into tipos_perno values(2, 'Tipo 2');
insert into tipos_perno values(3, 'Tipo 3');

insert into origen_compra values(1, 'Mercado Libre');

 insert into pedidos values(
    1,
    'Seba',
    5,
    30,
    20,
    1,
    'Colonial',
    '1123935060',
    'CABA',
    1,
    1,
    50
 );
