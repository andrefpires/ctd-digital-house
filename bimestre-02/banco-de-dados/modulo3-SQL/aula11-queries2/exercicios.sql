-- AS, LIMIT e OFFSET
-- 1. Mostre o título de todas as séries e use alias para que o nome do campo fique com a primeira letra maiúscula.
USE filmes_db;
SELECT titulo AS 'Título' 
FROM series;

-- 2. Busque por títulos de filmes com Avaliação superior a 3, com mais de 1 prêmio e com data de lançamento entre '01-01-1988' e '31-12-2009'.
-- Classifique os resultados em ordem decrescente.
USE filmes_db;
SELECT * FROM filmes
WHERE avaliacao > 3
AND
premios > 1
AND
data_lancamento BETWEEN 1988-01-01 AND 2009-12-31
ORDER BY data_lancamento DESC;

-- 3. Fazer um top 3 com os filmes a partir do 10º registro da consulta anterior. 
USE filmes_db;
SELECT * FROM filmes
LIMIT 10 OFFSET 10;

-- 4. Quais são os 3 piores episódios considerando suas avaliações?
-- R:  I Think Im Gonna Like It Here, Valar Dohaeris, The Magnificent Seven.
USE filmes_db;
SELECT * FROM episodios
ORDER BY avaliacao
LIMIT 3;

-- 5. Liste nome, sobrenome e avaliacao da tabela Atores. Utilize Alias para mostrar o título das colunas com a 1a letra maiúscula. Substitua o nome
-- da coluna id por Identificação e da coluna avaliacao por Classificação.
USE filmes_db;
SELECT
	id AS 'Identificação',
    nome AS 'Nomes',
    sobrenome AS 'Sobrenomes',
    avaliacao AS 'Classificação'
FROM atores;
