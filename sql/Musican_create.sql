-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2019-09-16 17:20:02.85

-- tables
-- Table: Cancion
use musican;

CREATE TABLE Cancion (
    id int  NOT NULL,
    nombre int  NOT NULL,
    reproducciones int  NOT NULL,
    autor nvarchar(150)  NOT NULL,
    dificultad int  NOT NULL,
    valor int  NOT NULL,
    urlStorage nvarchar(255)  NOT NULL,
    CONSTRAINT Cancion_pk PRIMARY KEY  (id)
);

-- Table: Estadistica
CREATE TABLE Estadistica (
    id int  NOT NULL,
    porcentajeAcierto int  NOT NULL,
    puntajeObtenido int  NOT NULL,
    fecha datetime  NOT NULL,
    Usuario_id int  NOT NULL,
    Cancion_id int  NOT NULL,
    CONSTRAINT Estadistica_pk PRIMARY KEY  (id)
);

-- Table: Letra
CREATE TABLE Letra (
    id int  NOT NULL,
    idioma int  NOT NULL,
    urlStorage int  NULL,
    Cancion_id int  NOT NULL,
    CONSTRAINT Letra_pk PRIMARY KEY  (id)
);

-- Table: Pagos
CREATE TABLE Pagos (
    id int  NOT NULL,
    monto float(5)  NOT NULL,
    fecha datetime  NOT NULL,
    tipoTarjeta int  NOT NULL,
    Usuario_id int  NOT NULL,
    CONSTRAINT Pagos_pk PRIMARY KEY  (id)
);

-- Table: TipoMembresia
CREATE TABLE TipoMembresia (
    id int  NOT NULL,
    costo float(5)  NOT NULL,
    descripcion nvarchar(100)  NULL,
    permisos int  NOT NULL,
    CONSTRAINT TipoMembresia_pk PRIMARY KEY  (id)
);

-- Table: Usuario
CREATE TABLE Usuario (
    id int  NOT NULL,
    email nvarchar(255)  NOT NULL,
    nombre nvarchar(100)  NOT NULL,
    apellido nvarchar(100)  NOT NULL,
    telefono varchar(9)  NOT NULL,
    genero int  NULL,
    TipoMembresia_id int  NOT NULL,
    password nvarchar(255)  NOT NULL,
    passwordToken nvarchar(255)  NULL,
    passwordTokenExpiration datetime  NULL,
    CONSTRAINT Usuario_pk PRIMARY KEY  (id)
);

-- foreign keys
-- Reference: Estadistica_Cancion (table: Estadistica)
ALTER TABLE Estadistica ADD CONSTRAINT Estadistica_Cancion
    FOREIGN KEY (Cancion_id)
    REFERENCES Cancion (id);

-- Reference: Estadistica_Usuario (table: Estadistica)
ALTER TABLE Estadistica ADD CONSTRAINT Estadistica_Usuario
    FOREIGN KEY (Usuario_id)
    REFERENCES Usuario (id);

-- Reference: Letra_Cancion (table: Letra)
ALTER TABLE Letra ADD CONSTRAINT Letra_Cancion
    FOREIGN KEY (Cancion_id)
    REFERENCES Cancion (id);

-- Reference: Pagos_Usuario (table: Pagos)
ALTER TABLE Pagos ADD CONSTRAINT Pagos_Usuario
    FOREIGN KEY (Usuario_id)
    REFERENCES Usuario (id);

-- Reference: Usuario_TipoMembresia (table: Usuario)
ALTER TABLE Usuario ADD CONSTRAINT Usuario_TipoMembresia
    FOREIGN KEY (TipoMembresia_id)
    REFERENCES TipoMembresia (id);

-- End of file.

