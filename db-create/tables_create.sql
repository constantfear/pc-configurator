-- done
CREATE TABLE IF NOT EXISTS Memory_type (
    id serial PRIMARY KEY,
    Type varchar(255) NOT NULL
);

-- done
CREATE TABLE IF NOT EXISTS Disk_type (
    id serial PRIMARY KEY,
    Type varchar(255) NOT NULL
);

-- done
CREATE TABLE IF NOT EXISTS Power_unit_type (
    id serial PRIMARY KEY,
    Type varchar(255) NOT NULL
);

-- done
CREATE TABLE IF NOT EXISTS Videomemory_type (
    id serial PRIMARY KEY,
    Videomemory_type varchar(255) NOT NULL
);

-- done
CREATE TABLE IF NOT EXISTS Form_factor (
    id serial PRIMARY KEY,
    Form_factor varchar(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS Chipset (
    id serial PRIMARY KEY,
    Chipset varchar(255) NOT NULL
);

-- done
CREATE TABLE IF NOT EXISTS Socket (
    id serial PRIMARY KEY,
    Socket varchar(255) NOT NULL
);



-- done
CREATE TABLE IF NOT EXISTS Disk (
    id serial PRIMARY KEY,
    img varchar(255) NOT NULL,
    Name varchar(255) NOT NULL,
    Type int NOT NULL references Disk_type (id),
    Memory varchar(255) NOT NULL,
    Price int NOT NULL
);

-- done
CREATE TABLE IF NOT EXISTS RAM (
    id serial PRIMARY KEY,
    img varchar(255) NOT NULL,
    Name varchar(255) NOT NULL,
    Type int NOT NULL references Memory_type (id),
    Memory int NOT NULL,
    Frequency int NOT NULL,
    Price int NOT NULL
);

-- done
CREATE TABLE IF NOT EXISTS Power_unit (
    id serial PRIMARY KEY,
    img varchar(255) NOT NULL,
    Name varchar(255) NOT NULL,
    Type int NOT NULL references Power_unit_type (id),
    Power int NOT NULL,
    Price int NOT NULL
); 

-- done
CREATE TABLE IF NOT EXISTS Videocard (
    id serial PRIMARY KEY,
    img varchar(255) NOT NULL,
    Name varchar(255) NOT NULL,
    Videomemory int NOT NULL,
    Videomemory_type int NOT NULL references Videomemory_type (id),
    Frequency int NOT NULL,
    Power int NOT NULL,
    Price int NOT NULL
);

-- done
CREATE TABLE IF NOT EXISTS Body (
    id serial PRIMARY KEY,
    img varchar(255) NOT NULL,
    Name varchar(255) NOT NULL,
    Form_factor integer[] NOT NULL,
    Price int NOT NULL
);

CREATE TABLE IF NOT EXISTS Motherboard (
    id serial PRIMARY KEY,
    img varchar(255) NOT NULL,
    Name varchar(255) NOT NULL,
    Chipset int NOT NULL references Chipset (id),
    Socket int NOT NULL references Socket (id),
    Memory_type int NOT NULL references Memory_type (id),
    Form_factor int NOT NULL references Form_factor (id),
    Price int NOT NULL
);

-- done
CREATE TABLE IF NOT EXISTS Processor (
    id serial PRIMARY KEY,
    img varchar(255) NOT NULL,
    Name varchar(255) NOT NULL,
    Core_number int NOT NULL,
    Frequency real NOT NULL,
    TDP int NOT NULL,
    Threads_number int NOT NULL,
    Socket int NOT NULL references Socket (id),
    Price int NOT NULL
);

-- done
CREATE TABLE IF NOT EXISTS Cooling_system (
    id serial PRIMARY KEY,
    img varchar(255) NOT NULL,
    Name varchar(255) NOT NULL,
    Type varchar(255) NOT NULL,
    Max_TDP int NOT NULL,
    Sockets integer[] NOT NULL,
    Price int NOT NULL
);


CREATE TABLE IF NOT EXISTS Configuration (
    id serial PRIMARY KEY,
    Name varchar(255) NOT NULL,
    Description varchar(255) NOT NULL,
    Body int NOT NULL references Body (id),
    Motherboard int NOT NULL references Motherboard (id),
    Processor int NOT NULL references Processor (id),
    Cooling_system int NOT NULL references Cooling_system (id),
    RAM int NOT NULL references RAM (id),
    Videocard int NOT NULL references Videocard (id),
    Disk int NOT NULL references Disk (id),
    Power_unit int NOT NULL references Power_unit (id),
    Full_price int NOT NULL
);
