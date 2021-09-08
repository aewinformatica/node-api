# node-api
Simples NODE-API

npm install cors

resetar commit com usuario errado
git reset --soft HEAD~1


para ver se as chaves SSH existentes estão presentes:

Digite ls -al ~/.ssh

gerando chave SSH
ssh-keygen -t ed25519 -C "aewinformatica@gmail.com"

adicionando a chave SSH ao SSH-AGENT
abra o github en SSH and GPG keys
abra o arquivo .pub copie a chave e inclua.

testando conexao ssh

ssh -T git@github.com

usuario por projeto

git config --local user.name=""
git config --local user.email=""
