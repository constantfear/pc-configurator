

-- IF EXISTS Configurator, RAM, Processor, Motherboard, Disk, Power unit, Videocard, Body, Cooling system 
-- THEN DROP TABLE Configurator, RAM, Processor, Motherboard, Disk, Power unit, Videocard, Body, Cooling system
-- #ЗДЕСЬ УДАЛЯЮТСЯ ТАБЛИЦЫ - МНЕНИЯ?????
-- #ты короче сам реши, как оставить




CREATE TABLE Configuration (
    id INT PRIMARY KEY,
    Body INT NOT NULL,
    Motherboard INT NOT NULL,
    Processor INT NOT NULL,
    Cooling_system INT NOT NULL,
    RAM INT NOT NULL,
    Videocard INT NOT NULL,
    Disk INT NOT NULL,
    Power_unit INT NOT NULL,
    Full_price INT NOT NULL,
    FOREIGN KEY (Body) REFERENCES Body (id),
    FOREIGN KEY (Motherboard) REFERENCES Motherboard (id),
    FOREIGN KEY (Processor) REFERENCES Processor (id),
    FOREIGN KEY (Cooling_system) REFERENCES Cooling_system (id),
    FOREIGN KEY (RAM) REFERENCES RAM (id),
    FOREIGN KEY (Videocard) REFERENCES Videocard (id),
    FOREIGN KEY (Disk) REFERENCES Disk (id),
    FOREIGN KEY (Power_unit) REFERENCES Power_unit (id),
    AUTO_INCREMENT (id)
);



CREATE TABLE RAM (
    id INT PRIMARY KEY,
    img VARCHAR(255) NOT NULL,
    Name VARCHAR(255) NOT NULL,
    Type VARCHAR(255) NOT NULL,
    Memory INT NOT NULL,
    Frequency INT NOT NULL,
    Price INT NOT NULL,
    AUTO_INCREMENT (id),
    FOREIGN KEY (Memory) REFERENCES Memory_type (id)
)

CREATE TABLE Memory_type (
    id INT PRIMARY KEY,
    Type VARCHAR(255) NOT NULL,
    AUTO_INCREMENT (id)
)



CREATE TABLE Disk (
    id INT PRIMARY KEY,
    img VARCHAR(255) NOT NULL,
    Name VARCHAR(255) NOT NULL,
    Type INT NOT NULL,
    Memory INT NOT NULL,
    Price INT NOT NULL,
    AUTO_INCREMENT (id),
    FOREIGN KEY (Type) REFERENCES Disk_type (id)
)

CREATE TABLE Disk_type (
    id INT PRIMARY KEY,
    Type VARCHAR(255) NOT NULL,
    AUTO_INCREMENT (id)
)



CREATE TABLE Power_unit (
    id INT PRIMARY KEY,
    img VARCHAR(255) NOT NULL,
    Name VARCHAR(255) NOT NULL,
    Type INT NOT NULL,
    Power INT NOT NULL,
    Price INT NOT NULL,
    AUTO_INCREMENT (id),
    FOREIGN KEY (Type) REFERENCES Power_unit_type (id)
) 

CREATE TABLE Power_unit_type (
    id INT PRIMARY KEY,
    Type VARCHAR(255) NOT NULL,
    AUTO_INCREMENT (id)
)



CREATE TABLE Videocard (
    id INT PRIMARY KEY,
    img VARCHAR(255) NOT NULL,
    Name VARCHAR(255) NOT NULL,
    Videomemory INT NOT NULL,
    Videomemory type INT NOT NULL,
    Frequency INT NOT NULL,
    Power INT NOT NULL,
    Price INT NOT NULL,
    AUTO_INCREMENT (id),
    FOREIGN KEY (Videomemory_type) REFERENCES Videomemory_type (id)
)

CREATE TABLE Videomemory_type (
    id INT PRIMARY KEY,
    Videomemory_type VARCHAR(255) NOT NULL,
    AUTO_INCREMENT (id)
)



CREATE TABLE Body (
    id INT PRIMARY KEY,
    img VARCHAR(255) NOT NULL,
    Name VARCHAR(255) NOT NULL,
    Form_factor INT NOT NULL,
    Price INT NOT NULL,
    AUTO_INCREMENT (id),
    FOREIGN KEY (Form_factor) REFERENCES Form_factor (id)
)

CREATE TABLE Form_factor (
    id INT PRIMARY KEY,
    Form_factor VARCHAR(255) NOT NULL,
    AUTO_INCREMENT (id)
)



CREATE TABLE Motherboard (
    id INT PRIMARY KEY,
    img VARCHAR(255) NOT NULL,
    Name VARCHAR(255) NOT NULL,
    Chipset INT NOT NULL,
    Socket INT NOT NULL,
    Memory_type INT NOT NULL,
    Form_factor INT NOT NULL,
    Price INT NOT NULL,
    AUTO_INCREMENT (id),
    FOREIGN KEY (Chipset) REFERENCES Chipset (id),
    FOREIGN KEY (Socket) REFERENCES Socket (id),
    FOREIGN KEY (Form_factor) REFERENCES Form_factor (id),
    FOREIGN KEY (Memory_type) REFERENCES Memory_type (id)
)

CREATE TABLE Chipset (
    id INT PRIMARY KEY,
    Chipset VARCHAR(255) NOT NULL,
    AUTO_INCREMENT (id)
)



CREATE TABLE Processor (
    id INT PRIMARY KEY,
    img VARCHAR(255) NOT NULL,
    Name VARCHAR(255) NOT NULL,
    Core_number INT NOT NULL,
    Frequency INT NOT NULL,
    TDP INT NOT NULL,
    Threads_number INT NOT NULL,
    Socket INT NOT NULL,
    Price INT NOT NULL,
    AUTO_INCREMENT (id),
    FOREIGN KEY (Socket) REFERENCES Socket (id)
)



CREATE TABLE Cooling system (
    id INT PRIMARY KEY,
    img VARCHAR(255) NOT NULL,
    Name VARCHAR(255) NOT NULL,
    Type VARCHAR(255) NOT NULL,
    Max_TDP INT NOT NULL,
    Socket INT NOT NULL,
    Price INT NOT NULL,
    AUTO_INCREMENT (id),
    FOREIGN KEY (Socket) REFERENCES Socket (id)
)

CREATE TABLE Socket (
    id INT PRIMARY KEY,
    Socket VARCHAR(255) NOT NULL,
    AUTO_INCREMENT (id)
)