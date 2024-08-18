# Compass UOL - Primeira Semana

## Git

- Durante a Primeira Semana do Programa de Bolsas da Compass, onde eu aprendi sobre Git/Github revisei comandos Git , sobre como iniciar um repositório , adicionar a área de stage , fazer commits, além de enviar as alterações para o repositório remoto.

- Além desses comandos iniciais , aprendi também a criar branchs, como alternar entre as mesmas, além de entender conceitos importantes como o de merge (trazer as alterações de outras branchs , para a atual), rebase (copiar um conjunto de commits e despejá-los em outro lugar), e comandos mais avançados como `stash`, `reflog`, e `cherry-pick`.

- Comandos Importantes para deletar dados, reverter mudanças, remover da área de stage, ou desfazer commits, também foram aprendidos durante o módulo de Git.

- Conflitos importantes e comuns que programadores enfrentam como resolver push rejeitado por históricos diferentes , ou resolver pull com conflito , também foram estudados e revisados durante o curso.

## Github

- Durante a primeira semana de Github , foram estudados e revisados conceitos importantes como : criação de um repositório remoto, Como clonar um repositório , linkar o repositório local com o remoto , como criar um readme e entender como funcionam Forks, Pull Requests e Issues na prática.

# Principais comandos do Git

- `git init` - Inicia um repositório git no diretório atual.

- `git add .` - Adiciona todos os arquivos e alterações do diretório atual para a área de stage

- `git commit -m "Mensagem qualquer do commit " - Faz um snapshot ou registra as alterações da área de stage com uma mensagem.

- `git checkout` - Podemos usar para alterar branchs ou até mesmo criar uma usando o `git checkout -b`.

- `git switch` - Alterar entre branchs.

- `git push` - Enviar as alterações do repositório local para o remoto.

- `git pull` - Puxar os arquivos do repositório remoto para o local.

- `git merge` - Trazer as alterações de uma outra branch para a atual.

- `git log` - Verificar o histórico de commits.

- `git rebase` - Pega um conjunto de commits , copia e os despeja em outro lugar.

- `git cherry-pick` - Pega uma série de commits específico e os insere abaixo do seu local atual (HEAD).

- `git reset` - Redefine o repositório para um commit específico, apagando todas as mudanças.
