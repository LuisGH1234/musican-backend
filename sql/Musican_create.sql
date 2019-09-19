-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2019-09-19 00:25:11.268

-- tables
-- Table: cancion

USE musican;
CREATE TABLE cancion (
    id int  NOT NULL auto_increment,
    nombre int  NOT NULL,
    reproducciones int  NOT NULL,
    autor nvarchar(150)  NOT NULL,
    dificultad int  NOT NULL,
    valor int  NOT NULL,
    urlStorage nvarchar(255)  NOT NULL,
    CONSTRAINT cancion_pk PRIMARY KEY  (id)
);

-- Table: estadistica
CREATE TABLE estadistica (
    id int  NOT NULL auto_increment,
    porcentajeAcierto int  NOT NULL,
    puntajeObtenido int  NOT NULL,
    fecha datetime  NOT NULL,
    usuarioId int  NOT NULL,
    cancionId int  NOT NULL,
    CONSTRAINT estadistica_pk PRIMARY KEY  (id)
);

-- Table: letra
CREATE TABLE letra (
    id int  NOT NULL auto_increment,
    idioma int  NOT NULL,
    urlStorage int  NULL,
    cancionId int  NOT NULL,
    CONSTRAINT letra_pk PRIMARY KEY  (id)
);

-- Table: pago
CREATE TABLE pago (
    id int  NOT NULL auto_increment,
    monto float(5)  NOT NULL,
    fecha datetime  NOT NULL,
    tipoTarjeta int  NOT NULL,
    usuarioId int  NOT NULL,
    CONSTRAINT pago_pk PRIMARY KEY  (id)
);

-- Table: tipoMembresia
CREATE TABLE tipoMembresia (
    id int  NOT NULL auto_increment,
    costo float(5)  NOT NULL,
    descripcion nvarchar(100)  NULL,
    permisos int  NOT NULL,
    CONSTRAINT tipoMembresia_pk PRIMARY KEY  (id)
);

-- Table: usuario
CREATE TABLE usuario (
    id int  NOT NULL auto_increment,
    email nvarchar(255)  NOT NULL,
    nombre nvarchar(100)  NOT NULL,
    apellido nvarchar(100)  NOT NULL,
    telefono varchar(9)  NOT NULL,
    genero int  NULL,
    tipoMembresiaId int  NOT NULL,
    password nvarchar(255)  NOT NULL,
    passwordToken nvarchar(255)  NULL,
    passwordTokenExpiration datetime  NULL,
    CONSTRAINT usuario_pk PRIMARY KEY  (id)
);

-- foreign keys
-- Reference: Estadistica_Cancion (table: estadistica)
ALTER TABLE estadistica ADD CONSTRAINT Estadistica_Cancion
    FOREIGN KEY (cancionId)
    REFERENCES cancion (id);

-- Reference: Estadistica_Usuario (table: estadistica)
ALTER TABLE estadistica ADD CONSTRAINT Estadistica_Usuario
    FOREIGN KEY (usuarioId)
    REFERENCES usuario (id);

-- Reference: Letra_Cancion (table: letra)
ALTER TABLE letra ADD CONSTRAINT Letra_Cancion
    FOREIGN KEY (cancionId)
    REFERENCES cancion (id);

-- Reference: Pagos_Usuario (table: pago)
ALTER TABLE pago ADD CONSTRAINT Pagos_Usuario
    FOREIGN KEY (usuarioId)
    REFERENCES usuario (id);

-- Reference: Usuario_TipoMembresia (table: usuario)
ALTER TABLE usuario ADD CONSTRAINT Usuario_TipoMembresia
    FOREIGN KEY (tipoMembresiaId)
    REFERENCES tipoMembresia (id);

-- End of file.

