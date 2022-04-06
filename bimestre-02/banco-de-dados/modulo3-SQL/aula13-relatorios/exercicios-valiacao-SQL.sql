-- Use o banco de dados "musimundos";
-- 1. Mostre a quantidade de clientes do Brasil.
USE musimundos;
SELECT COUNT(*) AS 'qtdClientes', pais FROM clientes
GROUP BY pais
HAVING pais = 'Brazil';

-- 2. Faça uma consulta ao banco de dados que mostre a identificação do gênero e o número de músicas que possui. Mostre o número que
-- você obteve como resultado da quantidade de músicas do gênero com id = 6.
USE musimundos;
SELECT id_genero, COUNT(*) AS 'Quantidade de músicas' FROM cancoes
GROUP BY id_genero
HAVING id_genero = 6;

-- 3. Faça uma consulta ao nosso banco de dados que some o total de todas as notas fiscais emitidas pela empresa.
USE musimundos;
SELECT SUM(valor_total) AS 'Total faturas' FROM faturas;

-- 4. Obtenha uma lista de todos os álbuns e sua duração média (milissegundos). Mostre o número da média obtida para o álbum 4.
USE musimundos;
SELECT id_album, AVG(duracao_milisegundos) AS 'Duração Milisegundos' FROM cancoes
GROUP BY id_album
HAVING id_album = 4;

-- 5. Faça uma consulta ao banco de dados e informe qual é o arquivo de música  com o menor peso em bytes.

-- 6. Faça uma consulta ao banco de dados que nos traga por cliente_id a soma total de suas faturas. Filtre aqueles em que a soma
-- do total é > 45. Mostre a soma total do cliente com id = 6.
USE musimundos;
SELECT id_cliente, SUM(valor_total) AS 'Valor faturas' FROM faturas
GROUP BY id_cliente
HAVING `Valor faturas` > 45 AND id_cliente = 6;