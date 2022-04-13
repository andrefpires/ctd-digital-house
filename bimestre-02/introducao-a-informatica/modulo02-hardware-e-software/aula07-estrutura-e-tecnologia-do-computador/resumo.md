## Estrutura e tecnologia do computador
O mundo vem se tornando mais tecnológico a cada dia na era da informação, as tecnologias se atualizam cada vez mais rápido, e temos dispositivos eletrônicos de variados tamanhos
e destinados a diferentes propósitos. Afinal, o que é necessário para ter um computador? Um computador deve ser capaz de receber dados (input), processar, e retornar o resultado
esperado em um dispositivo de saída (output), que podem ser armazenados, transmitidos ou impressos.

A comunicação entre o usuário e máquina pode ser feito através do pressionamento de teclas. Por exemplo, ao clickar no botão do mouse para pausar um vídeo, são mandados pulsos magnéticos
negativos e positivos, através do barramento de dados, que são processados pela CPU em bits (binary digit). Com o auxílio da memória ROM, o processador procura por intruções de como executar
aquela ação pedida pelo usuário, procurando por informações como qual botão foi clicado, o software em que ele está inserido, entre outras...

### Componentes internos
Estes subcomponentes são essenciais para o funcionamento do computador. Entre eles temos:

- **Placa mãe:** Placa principal onde todos componenetes se conectam, tanto de forma direta como indireta, através de conectores. Aleḿ de interligar ela é responsável por alimentar alguns periféricos através da energia recebida da fonte de alimentação;
- **Processador (Unidade Central de Processamento):** É comparado ao cérebro do computador em analogia ao corpo humano, pois interpreta e executa as ações pedidas, através de operações básicas aritméticas e lógicas.
- **Memórias RAM e ROM:** A memória RAM armazena informações de forma temporária, apenas durante a utilização do computador, assim que o sistema é desligado tudo é apagado. Na memória ROM são armazenadas de forma permanente informações/instruções relacionadas a inicialização do sistema.
- **Placas de vídeo e som:** Componentes essenciais para a comunicação entre usuário e máquina, além de receber sons de sipositivos de entrada também reproduz informações nos dispositivos de saída.
- **Dispositivos de armazenamento secundários (HDD ou SSD):** Componentes onde são gravados dados que não são necessários de forma imediata, podem ser arquivados arquivos de texto, músicas, fotos e vídeos.

### Componentes externos
Também chamados de periféricos, são componentes que não são essencias para o funcionamento do computador. São dispositivos que permitem a comunicação entre máquinas e entre usuário e máquina, adicionando funções à máquina. São dispositivos de entrada e saída de dados/informações, como teclado, mouse, monitor hd externo, modem...

### Como as ações pedidas são executadas?
O processador que é responsável por interpretar e executar a ação perdida, ele procurana mamória RAM as instruções para se situar e saber como executar o que foi requisitado, através de um acumulador os passos são contados até que o processo seja concluído.

As características presentes na CPU que ditam qual será a valocidade de execução de cada tarefa são:
- **Frequência:** É a velocidade de processamento da CPU, expressa em GHz (gigahertz). Por exemplo, uma CPU com velocidade de clock de 3,2 GHz executa 3,2 bilhões de ciclos por segundo. O IPC (Instruções por ciclo) mede o número de instruções que um processador pode executar em cada ciclo de seu relógio (clock) interno. Frequência é o número de operações que se faz em um determinado segundo.
- **Núcleos:** Agentes disponíveis para executar as ações, com dois cozinheiros uma receita fica pronta mais rápido, com dois núcleos a tarefa também é concluída com menos tempo. Se a tarefa foi programada para ser feita com no máximo dois núcleos e o processador possuir mais do que isso, não significa que será executado mais rápido.
- **Subprocessos (Threads):** Tarefas que compõem um passo do processo, e que o núcleo pode realizar ao mesmo tempo.
- **Memória cache:** Armazena um conjuntos de instruções da memória RAM temporariamente para que não seja necessário ficar procurando uma a uma, simplificando o processo.