-- 1. Liste as músicas que possuem a letra "z" no título.
USE Projeto_Spotify;
SELECT * FROM cancao
WHERE titulo LIKE '%Z%';

-- 2. Liste as músicas que têm a letra "a" como segundo caractere e a letra "s" como último caractere.
USE Projeto_Spotify;
SELECT * FROM cancao
WHERE titulo LIKE '_a%s';

-- 3. Mostre a lista de reprodução que contém mais músicas, renomeando as colunas, colocando em maiúscula a primeira letra, os
-- acentos correspondentes e adicionando os espaços entre as palavras.
USE Projeto_Spotify;
SELECT
	idPlaylist AS 'ID Playlist',
    idusuario AS 'ID Usuário',
    titulo AS 'Título',
    qtdcancoes AS 'Quantidade de canções',
    idestado AS 'ID Estado',
    Datacriacao AS 'Data de criação',
    Dataexclusao AS 'Data de exclusão'
FROM playlist
ORDER BY qtdcancoes DESC
LIMIT 1;

-- 4. Em outro momento, obtenha uma lista com os 5 usuários mais jovens, a partir dos próximos 10 registros.
USE Projeto_Spotify;
SELECT *  FROM usuario
ORDER BY Data_nac DESC
LIMIT 5 OFFSET 10;

-- 5. Liste as 5 músicas com mais reproduções, em ordem decrescente.
USE Projeto_Spotify;
SELECT * FROM cancao
ORDER BY qtdreproducao DESC
LIMIT 5;

-- 6. Gere um relatório de todos os álbuns em ordem alfabética.
USE Projeto_Spotify;
SELECT * FROM album
ORDER BY titulo;
