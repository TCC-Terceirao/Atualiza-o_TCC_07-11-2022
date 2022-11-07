Create table Grupo(
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
   	nomeGrupo VARCHAR(30) NOT NULL
);

Create table Elemento(
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
   	simbolo VARCHAR(2) NOT NULL,
   	nome VARCHAR(25) NOT NULL,
   	nmr_atomico INT NOT NULL,
   	massa VARCHAR(10) NOT NULL,
   	id_grupo INT NOT NULL,
	FOREIGN KEY (id_grupo) REFERENCES Grupo(Id)
);

INSERT INTO Grupo(id, nomeGrupo) VALUES 
(1 , "Não Metais"),
(2 , "Gases Nobres"),
(3 , "Metais Alcalinos"),
(4 , "Metais Alcalino-Terrosos"),
(5 , "Semimetais"),
(6 , "Halogênios"),
(7 , "Outros Metais"),
(8 , "Metais de Transição"),
(9 , "Lantanídeos"),
(10 , "Actinídios");

INSERT INTO Elemento(id, simbolo, nome, nmr_atomico, massa, id_grupo) VALUES
(1, "H", "Hidrogênio", 1, "1,008", 1),
(2, "He", "Hélio", 2, "4,003", 2),
(3, "Li", "Lítio", 3, "6,941", 3),
(4, "Be", "Berílio", 4, "9,012", 4),
(5, "B", "Boro", 5, "10,811", 5),
(6, "C", "Carbono", 6, "12.011", 1),
(7, "N", "Nitrogênio", 7, "14.007", 1),
(8, "O", "Oxigênio", 8, "15.999", 1),
(9, "F", "Flúor", 9, "18.998", 6),
(10, "Ne", "Neônio", 10, "20.18", 2),
(11, "Na", "Sódio", 11, "22.99", 3),
(12, "Mg", "Magnésio", 12, "24.305", 4),
(13, "Al", "Alumínio", 13, "26.982", 7),
(14, "Si", "Silício", 14, "28.086", 5);