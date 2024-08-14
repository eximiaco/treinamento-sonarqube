# Exercício 2 - Integrando com o CI no Gitlab

Neste exercício, integraremos o Sonarqube em nosso pipeline de CI/CD.

## Objetivos

1. Entender como integrar o Sonarqube no pipeline de CI/CD
2. Aplicar configurações no Sonar Scanner em diversos níveis
3. Interpretar os resultados da análise 

## Passos para a execução da tarefa

1. Descomentar o pipeline de CI/CD existente no projeto. Efetuar commit e push para verificar se o pipeline está funcional.
2. Obter um token em seu projeto do Sonarqube:
    - Acessar: Analysis Method > GitLab CI
    - Gerar o token
3. Armazenar o token gerado nas variáveis do Gitlab
    - Acessar o projeto no Gitlab
    - Acessar: Settings > CICD > Variables
    - Criar uma variável chamada SONAR_TOKEN
4. Obter o ProjectKey no Sonarqube
    - Acessar o projeto no Sonarqube, em seguida Project Information  
5. Configurar o Sonarscanner
    - Descomentar os passos necessários no Pipeline de CI/CD para cada linguagem, configurando a URL do sonarqube, a project key e o token.
    - Configure o scanner para garantir que (você pode utilizar o sonar-project.properties se houver suporte):
        - Ele analise o report do Code coverage.
        - Espere a analise terminar no servidor para concluir o pipeline.
6. Efetue o commit das atualizações e aguarde o pipeline finalizar
7. Aguarde o pipeline e avalie os resultados.
