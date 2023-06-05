## OPINIO

Opinio é uma plataforma intuitiva que permite a criação rápida de enquetes personalizadas. Com recursos flexíveis e uma interface amigável, os usuários podem associar perguntas e respostas, compartilhar as enquetes e analisar os resultados de maneira fácil. Obtenha insights valiosos e tome decisões informadas com Opinio. Experimente agora mesmo!

![image](https://github.com/Evandromck/sonic-meet-main/assets/64655153/cbf0b65f-d30b-467e-b2e9-25f3cc6d3253)

## Requisitos - Aplicação de Enquetes Simplificadas

<details>
<summary>1. Introdução</summary>

<br/>

-   1.1 Objetivo
     -   Criar uma aplicação de enquetes onde os usuários possam criar suas próprias enquetes e associar perguntas e respostas.
-   1.2 Escopo
     -   Desenvolver uma aplicação que permita aos usuários criar, editar, excluir e compartilhar enquetes, associando perguntas e respostas.
-   1.3 Definições, acrônimos e abreviações
     -   Definir os termos, acrônimos e abreviações utilizados ao longo da documentação, a fim de facilitar a compreensão do projeto e evitar ambiguidades.
</details>



<details>
<summary>2. Visão Geral do Sistema</summary>

<br/>

-   2.1 Descrição do Sistema
     -   Fornecer uma descrição concisa do sistema de enquetes simplificadas, destacando sua finalidade, principais características e funcionalidades.
-   2.2 Funcionalidades Principais
     -   Destacar de forma resumida as principais funcionalidades da aplicação de enquetes simplificadas, como criar enquetes, associar perguntas e respostas, compartilhar enquetes, responder a enquetes e visualizar resultados.
-   2.3 Público-alvo
     -   Identificar de forma sucinta o público-alvo da aplicação de enquetes simplificadas, como usuários em geral, profissionais de pesquisa, equipes de marketing, entre outros.
-   2.4 Plataformas Suportadas
     -   Enumerar de maneira concisa as plataformas nas quais a aplicação de enquetes simplificadas será suportada, como web, dispositivos móveis (iOS e Android) e possíveis sistemas operacionais compatíveis. 
</details>



<details>
<summary>3. Requisitos Funcionais</summary>

<br/>

-   3.1 Registro de Usuário
     -   Implementar um processo de registro de usuário que permita aos usuários criar uma conta na aplicação, fornecendo informações básicas, como nome, e-mail e senha.
-   3.2 Criação de Enquete
     -   Permitir que os usuários criem suas próprias enquetes, fornecendo um formulário onde eles possam inserir o título da enquete, as perguntas e as opções de resposta.
-   3.3 Associação de Perguntas e Respostas
     -   Possibilitar que os usuários associem perguntas às enquetes criadas e forneçam opções de resposta para cada pergunta.
-   3.4 Edição de Enquete
     -   Permitir que os usuários editem as enquetes que criaram, possibilitando a modificação do título, das perguntas e das opções de resposta.  
-   3.5 Exclusão de Enquete
     -   Dar aos usuários a opção de excluir as enquetes que criaram, removendo-as permanentemente do sistema. 
-   3.6 Compartilhamento de Enquete
     -   Facilitar o compartilhamento das enquetes com outras pessoas, permitindo que os usuários gerem links ou compartilhem nas redes sociais.     
-   3.7 Resposta às Enquetes
     -   Permitir que os usuários respondam às enquetes criadas por outros usuários, selecionando as opções de resposta disponíveis. 
-   3.8 Visualização de Resultados
     -   Apresentar aos usuários os resultados das enquetes, exibindo estatísticas e gráficos que mostram a distribuição das respostas. 
</details>


<details>
<summary>4. Requisitos Não Funcionais</summary>

<br/>

-   4.1 Interface de Usuário
     -   Desenvolver uma interface de usuário intuitiva e amigável que permita aos usuários interagirem facilmente com a aplicação de enquetes.
-   4.2 Segurança
     -   Implementar medidas de segurança para proteger os dados dos usuários, como autenticação de usuários, criptografia de dados sensíveis e prevenção de ataques.
-   4.3 Desempenho
     -   Garantir que a aplicação de enquetes tenha um bom desempenho, com tempos de resposta rápidos e capacidade de lidar com um grande número de usuários simultaneamente.
-   4.4 Disponibilidade
     -   Assegurar que a aplicação de enquetes esteja disponível e acessível aos usuários de forma contínua, com um mínimo de tempo de inatividade planejado. 
-   4.5 Manutenibilidade
     -   Desenvolver a aplicação de enquetes de forma modular e bem documentada, facilitando a manutenção e o suporte contínuo. 
-   4.6 Internacionalização
     -   Permitir que a aplicação de enquetes seja facilmente adaptável para suportar diferentes idiomas e localizações, atendendo a um público global.    

</details>


<details>
<summary>5. Restrições Técnicas</summary>

<br/>

-   5.1 Tecnologias Utilizadas
     -   Definir as principais tecnologias a serem utilizadas no desenvolvimento da aplicação de enquetes, como NestJS, TypeORM, ReactJS, PostgreSQL, Swagger, Material-UI, entre outras.
-   5.2 Integrações Externas
     -   Identificar as integrações externas necessárias para o funcionamento da aplicação de enquetes, como integração com serviços de autenticação, APIs de envio de e-mail ou compartilhamento em redes sociais.
-   5.3 Requisitos de Hardwar
     -   Especificar os requisitos mínimos de hardware necessários para executar a aplicação de enquetes, como capacidade de processamento, memória e armazenamento.
-   5.4 Requisitos de Software
     -   Listar os requisitos de software necessários para executar a aplicação de enquetes, como sistema operacional, versões específicas de navegadores, frameworks e bibliotecas.  

</details>


<details>
<summary>6. Casos de Uso</summary>

<br/>

-   6.1 Caso de Uso 1: Registro de Usuário
     -   Permitir que um usuário se registre na aplicação, fornecendo as informações necessárias, como nome, e-mail e senha.
-   6.2 Caso de Uso 2: Criação de Enquete
     -   Permitir que um usuário crie uma nova enquete, inserindo um título e adicionando perguntas e opções de resposta.
-   6.3 Caso de Uso 3: Associação de Perguntas e Respostas
     -   Possibilitar que um usuário associe perguntas às enquetes criadas e adicione opções de resposta para cada pergunta.
-   6.4 Caso de Uso 4: Edição de Enquete
     -   Permitir que um usuário edite uma enquete existente, alterando o título, adicionando ou removendo perguntas e opções de resposta.
-   6.5 Caso de Uso 5: Exclusão de Enquete 
     -   Dar ao usuário a capacidade de excluir uma enquete que ele tenha criado, removendo-a permanentemente do sistema.
-   6.6 Caso de Uso 6: Compartilhamento de Enquete
     -   Possibilitar que um usuário compartilhe uma enquete com outras pessoas, seja gerando um link de compartilhamento ou por meio de integrações com redes sociais.
-   6.7 Caso de Uso 7: Resposta às Enquetes
     -   Permitir que os usuários respondam às enquetes disponíveis, selecionando as opções de resposta desejadas.
-   6.8 Caso de Uso 8: Visualização de Resultados
     -   Apresentar aos usuários os resultados das enquetes, exibindo estatísticas e gráficos que demonstram a distribuição das respostas.     

</details>

<details>
<summary>7. Considerações Finais</summary>

<br/>

-   7.1 Riscos e Desafios
     -   Identificar os principais riscos e desafios que podem ser encontrados durante a implementação da aplicação de enquetes, como possíveis problemas de escalabilidade, dificuldades na integração com serviços externos ou desafios de segurança.
-   7.2 Melhorias Futuras
     -   Apresentar possíveis melhorias que podem ser implementadas na aplicação de enquetes no futuro, como a adição de recursos avançados de análise de dados, a integração com outras plataformas ou a personalização da interface do usuário.
-   7.3 Referências
     -   Incluir as referências utilizadas na criação da documentação da aplicação de enquetes, como documentações oficiais de tecnologias utilizadas, artigos relevantes e outras fontes de informação.  

</details>


