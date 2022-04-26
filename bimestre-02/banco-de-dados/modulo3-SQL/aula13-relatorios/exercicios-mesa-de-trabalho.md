Na base de dados **musimundos** faça as seguintes operações:

Na tabela *faturas*:

1. O valor da fatura mais alta cuja cidade de cobrança é "Oslo".
~~~sql
USE musimundos;
SELECT * FROM faturas
WHERE cidade_cobranca = 'Oslo'
ORDER BY valor_total DESC
LIMIT 1;
~~~

2. O valor da fatura mais baixa de todas.
~~~sql
USE musimundos;
SELECT * FROM faturas
ORDER BY valor_total
LIMIT 1;
~~~

3. O valor médio das faturas que o país de cobrança é "Canada".
~~~sql
USE musimundos;
SELECT
  pais_cobranca `País cobrança`,
  AVG(valor_total) `Média faturas`
FROM faturas
WHERE pais_cobranca = 'Canada';
~~~

4. A quantidade de faturas que o país de cobrança é "Canada".
~~~sql
USE musimundos;
SELECT pais_cobranca `País cobrança`, COUNT(*) `Quantidade faturas` FROM faturas
WHERE pais_cobranca = 'Canada';
~~~

5. O valor total somado de todas as faturas.
~~~sql
USE musimundos;
SELECT SUM(valor_total) `Valor total faturas` FROM faturas;
~~~

6. Selecione o id, a data e valor das faturas com valor abaixo da média.
~~~sql
USE musimundos;
SELECT * FROM faturas
WHERE valor_total < (SELECT AVG(valor_total) FROM faturas);
~~~

Na tabela *empregados*:

7. A data de nascimento do funcionário mais jovem a empresa.
~~~sql
USE musimundos;
SELECT nome, sobrenome, data_nascimento `Data Nascimento` FROM empregados
ORDER BY data_nascimento DESC
LIMIT 1;
~~~

8. A data de nascimento do funcionário mais velho a empresa.
~~~sql
USE musimundos;
SELECT nome, sobrenome, data_nascimento `Data Nascimento` FROM empregados
ORDER BY data_nascimento
LIMIT 1;
~~~

9. Formate a data do nascimento dos funcionários no formato "02 May 2020" (DATE_FORMAT).
~~~sql
USE musimundos;
SELECT
	nome `Nome`,
  sobrenome `Sobrenome`,
  DATE_FORMAT(`data_nascimento`, "%d %M %Y") `Data de Nascimento`
FROM empregados;
~~~

Na tabela *cancoes*:

10. O número de cancoes que tem como compositor "AC/DC".
~~~sql
USE musimundos;
SELECT COUNT(*) `Número de canções`, compositor FROM cancoes
WHERE compositor = 'AC/DC';
~~~

11. A duração média das músicas em milisegundos.
~~~sql
USE musimundos;
SELECT
	AVG(duracao_milisegundos) `Duração total músicas (milisegundos)`
FROM cancoes;
~~~

12. O tamanho médio em bytes das músicas que tem como compositor "AC/DC".
~~~sql
USE musimundos;
SELECT
	AVG(bytes) `Média bytes músicas`,
    compositor
FROM cancoes
WHERE compositor = 'AC/DC';
~~~

Na tabela *clientes*:

13. Quantidade de clientes que moram na cidade de "São Paulo".
~~~sql
USE musimundos;
SELECT
	COUNT(*) `clientes`,
    cidade
FROM clientes
WHERE cidade = 'São Paulo';
~~~

14. Quantidade de clientes que moram na cidade de "Paris".
~~~sql
USE musimundos;
SELECT
	COUNT(*) `clientes`,
    cidade
FROM clientes
WHERE cidade = 'Paris';
~~~

15. Quantidade de clientes que tenham email do "yahoo".
~~~sql
USE musimundos;
SELECT
	COUNT(*) `Clientes email yahoo`
FROM clientes
WHERE email LIKE '%yahoo%';
~~~
