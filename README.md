# Aluraflix
 
## Descrição
O Aluraflix é um projeto da Alura em parceria com a Oracle Next Education, desenvolvido em React com Vite. Ele simula um site de streaming que exibe vídeos do canal Alura no YouTube. Este desafio é um requisito para obter o certificado da última fase do programa ONE. O projeto utiliza diversas funcionalidades e tecnologias do React, como react-router-dom, os hooks useState, useParams e useEffect. No site, os usuários podem assistir aos vídeos clicando em um banner que funciona como um slider automático e manual, ou selecionando vídeos em categorias específicas. Além disso, é possível editar, excluir e adicionar novos vídeos utilizando funcionalidades CRUD que se comunicam com um servidor JSON. Para utilizar todas essas funcionalidades, é necessário configurar e executar o json-server no terminal após clonar o projeto.

## Funcionalidade
* **Importante**: Para utilizar as funcionalidades descritas, clone o projeto, execute npm i e depois npm run dev no terminal; abra outro terminal e rode npm start para carregar os arquivos do db.json.
  
* **Banner:** O banner apresenta um slide com navegação automática e manual. Setas à esquerda e à direita permitem retroceder e avançar entre os slides. A cada 5 segundos, há uma transição automática de slides. No lado direito do banner, há um vídeo clicável que direciona para assistir ao conteúdo correspondente.
  
* **Categorias: Líderes em TI, Front-End e Backend:** Nesta seção, você pode clicar em um vídeo para ser redirecionado para a página do site e assistir ao vídeo correspondente. Além disso, é possível deletar o vídeo do arquivo db.json ao clicar no botão de exclusão. Ao clicar no botão de edição, uma modal será aberta para editar título, link da imagem, link do vídeo e descrição. As atualizações feitas serão refletidas imediatamente no site ao clicar em "Guardar". Na parte inferior de cada área, há um scroll horizontal que permite navegar para a esquerda e direita quando há muitos vídeos para visualizar.
  
* **Menu**: No cabeçalho, há um menu com opções para "Home" e "Novo Vídeo". Ao clicar em "Novo Vídeo", você é direcionado para a página de inserção de novos vídeos. Nesta página, preencha o formulário com título, link da imagem, link do vídeo e descrição. Ao clicar em "Guardar", as atualizações serão refletidas imediatamente no site com os novos vídeos adicionados. Clicando em "Home" ou na logo da Aluraflix, você retorna para a página inicial do site.

## Imagem
![Captura de tela 2024-07-12 192616](https://github.com/user-attachments/assets/079035da-2a4e-4550-ad65-63fb3b2e1104)


## Tecnologias utilizadas
* <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="logo React"/>
* <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="logo JavaScript">
* <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="logo Node.js">
## Autor
| [<img loading="lazy" src="https://avatars.githubusercontent.com/u/133707929?v=4" width=115><br><sub text-decoration="none">Lucas Gabriel</sub>](https://github.com/LucasProg23) |
| :---: |
