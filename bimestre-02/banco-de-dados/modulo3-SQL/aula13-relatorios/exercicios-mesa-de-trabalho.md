Na base de dados **musimundos** faça as seguintes alterações:

Na tabela faturas:

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