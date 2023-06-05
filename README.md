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

<details open>
<summary>Quick Start</summary>

<br/>

-   You will need to have `NodeJS` and all [requirements](https://mediasoup.org/documentation/v3/mediasoup/installation/#requirements) installed, this project has been tested with Node version [16.X](https://nodejs.org/en/blog/release/v16.15.1/) and [18.X](https://nodejs.org/en/blog/release/v18.16.0).

-   Requirements install example for `Ubuntu 20.04`

```bash
# Gcc g++ make
$ apt-get update
$ apt-get install -y build-essential
# Python 3.8 and pip
$ DEBIAN_FRONTEND=noninteractive apt-get install -y tzdata
$ apt install -y software-properties-common
$ add-apt-repository ppa:deadsnakes/ppa
$ apt update
$ apt install -y python3.8 python3-pip
# NodeJS 16.X and npm
$ apt install -y curl dirmngr apt-transport-https lsb-release ca-certificates
$ curl -sL https://deb.nodesource.com/setup_16.x | bash -
$ apt-get install -y nodejs
$ npm install -g npm@latest
```

-   Start the server

```bash
# Clone this repo
$ git clone https://github.com/miroslavpejic85/mirotalksfu.git
# Go to to dir mirotalksfu
$ cd opinio
# Copy app/src/config.template.js in app/src/config.js and edit it if needed
$ cp app/src/config.template.js app/src/config.js
# Install dependencies - be patient, the first time will take a few minutes, in the meantime have a good coffee ;)
$ yarn
# Start the server
$ yarn start
# If you want to start the server on a different port than the default use an env var
$ PORT=8080 yarn start:dev
```

-   Open in browser https://localhost:8080/api or `:8080` if default port changed.

</details>

<details open>
<summary>Swagger</summary>
     


# NestJS - Swagger - Documentação de Endpoint

O Swagger (_aka_ OpenApi) é uma biblioteca muito conhecida no universo backend, estando disponível para diversas linguagens e frameworks. Ela gera um site interno no seu backend que descreve, com muitos detalhes, cada endpoint e estrutura de entidades presentes na sua aplicação.

Além disso, também oferece uma interface para que a API seja testada, sem precisar de um cliente HTTP externo (_aka_ Postman, Insomnia, Thunder Client, etc) e, principalmente, com configuração ZERO!

Como de costume, o Nest resolve toda a parte chata da configuração e a gente só precisa declarar algumas linhas de código para integrar essa poderosa API.

## Instalação

- `@nestjs/swagger`
- `swagger-ui-express`

```bash
yarn add --save @nestjs/swagger swagger-ui-express
```

> Também é possível usar o Swagger no Nest com o Fastify, basta usar a lib do swagger `fastify-swagger`

## Configuração

Abra o arquivo `main.ts` e adicione o seguinte conteúdo:

`src/main.ts`

```typescript
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Documentação com Swagger - Evandro Araujo')
    .setDescription(
      'O Swagger (aka OpenApi) é uma biblioteca muito conhecida no universo backend, estando disponível para diversas linguagens e frameworks. Ela gera um site interno no seu backend que descreve, com muitos detalhes, cada endpoint e estrutura de entidades presentes na sua aplicação.',
    )
    .setVersion('1.0')
    .addTag('users')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}

bootstrap();
```

## Acessando

Execute a aplicação

```bash
yarn start:dev
```

Abra a URL no seu navegador

http://localhost:8080/api/

Pronto!

![Image](https://github.com/Evandromck/opinio/assets/64655153/607e9397-f9ca-4d84-93ea-d7adfcef7645)

## Tags

As tags servem para organizar endpoints.

Elas são declaradas no `main.ts` e utilizadas nos `controllers`.

### Vamos gerar um recurso

- `users`

```bash
nest g resource users
```

Assim que os arquivos forem gerados, basta marcar o `UsersController` com a tag `users`. Para isso, utilizamos o decorator `@ApiTags('tag')` que vem com a biblioteca `@nestjs/swagger`, da seguinte forma:

`src/users/users.controller.ts`

```typescript
@ApiTags('users')
@Controller('users')
export class UsersController {
  // Endpoints
}
```

Salve o arquivo para que o Nest recarregue a aplicação automaticamente e atualize a página do swagger.

![Image](https://github.com/Evandromck/opinio/assets/64655153/607e9397-f9ca-4d84-93ea-d7adfcef7645)

## Testando requisições

Para testar a requisições, basta clicar em cima de um dos endpoints desejados para visualizar a sua estrutura.

![Image](https://github.com/Evandromck/opinio/assets/64655153/e791f35f-3a88-421a-b143-47dcae73ecd1)

Clique no botão `Try it out` e depois em `Execute` para realizar a requisição HTTP.

![Image](https://github.com/Evandromck/opinio/assets/64655153/0d9c0c28-e7f3-4b4b-978f-69e4b1105fea)

## Detalhando um pouco melhor os endpoints

Alguns endpoints, como o `PATCH`, que atualiza uma entidade, possuem parâmetros e uma estrutura de `Body` que deve ser enviada.

Os parâmetros primitivos (`string`, `number`, etc) são identificados de forma automática pelo Swagger, entretanto, os parâmetros mais complexos (objetos customizados, etc) precisam ser detalhados.

Vamos construir a estrutura de `CreateUserDto` e detalhar cada propriedade para deixar nossa aplicação mais informativa.

`src/users/dto/create-user.dto.ts`

```typescript
export class CreateUserDto {
  name: string;

  email: string;

  password: string;
}
```

Para que o Swagger entenda as propriedade de um objeto, precisamos usar alguns `decorators`.

Para dados primitivos (`string`, `number`, etc), utilizaremos o `decorator` `@ApiProperty()`, adicionando dados de exemplo na propriedade `example` e a descrição do campo na propriedade `description`.

`src/users/dto/create-user.dto.ts`

```typescript
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'Evandro Araujo',
    description: `O nome será utilizado para qualquer coisa (Perfil, Home Page, etc) que precise exibir informações da pessoa conectada.`,
  })
  name: string;

  @ApiProperty({
    example: 'email@email.com',
    description: `O e-mail é necessário apra o login, mas não necessariamente precisa ser o mesmo e-mail da rede social que estiver conectada. Login sem rede social precisa de uma senha.`,
  })
  email: string;

  @ApiProperty({
    example: '123@abc',
    description: `É possível conectar com redes sociais sem uma senha, mas para login usando o e-mail diretamente é necessário informar uma senha.`,
  })
  password?: string;
}
```

Com isso, o resultado é incrível!

![Image](https://github.com/Evandromck/opinio/assets/64655153/e791f35f-3a88-421a-b143-47dcae73ecd1)






> Após fazer isso, precisamos encerrar a aplicação do Nest e executar novamente, para que o mecanismo seja ativado por completo.

E, pronto! Teremos o mesmo resultado 🚀

![Image](https://github.com/Evandromck/opinio/assets/64655153/0d9c0c28-e7f3-4b4b-978f-69e4b1105fea)

## Próximos passos

Para configurar uma documentação completa, será necessário a utilização de vários outros tipos e especificações mais detalhadas.

Para isso, consulte os seguintes links da documentação:

- Tipos e parâmetros: https://docs.nestjs.com/openapi/types-and-parameters
- Tipos mapeados: https://docs.nestjs.com/openapi/mapped-types

> Também é possível criar documentações separadas, incluindo apenas alguns `Modules` em cada documentação.
>
> Isso é útil para quando um conjunto de endpoints é interessante para uma determinada aplicação de Frontend Web, e outros endpoints são interessantes para uma aplicação de Frontend Mobile, mas que utilizam o mesmo backend.
>
> Confira a implementação em https://docs.nestjs.com/openapi/other-features


     
     
     
</details>


