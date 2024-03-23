# Define a imagem base
FROM node:14

# Define o diretório de trabalho no container
WORKDIR /app

# Copia o arquivo package.json e package-lock.json (se disponível)
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia os arquivos do projeto para o diretório de trabalho
COPY . .

# Compila o projeto TypeScript (assumindo que você tem um script de build definido no package.json)
RUN npm run build

# Expõe a porta que sua aplicação usa
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["node", "dist/data-source.js"]
