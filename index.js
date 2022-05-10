//CRUD-javascript puro - Create Read Update Delete
//Mini-twitter

const miniTweeter = {
    usuarios: [
        {
            username: 'matheuscamp',
        }
    ],
    posts: [
        {
            id: 1,
            owner: 'matheuscamp',
            content: 'meu primeiro tweette',
        }
    ]
};

//CREATE:

function criaPost(dados){
    miniTweeter.posts.push({
        id: miniTweeter.posts.length+1,
        owner: dados.owner,
        content: dados.content
    })
}
//READ
function pegaPosts(){
    return miniTweeter.posts;
}

//UPDATE

function atualizaContentDoPost(id, novoConteudo){
        const postQueVaiSerAtualizado = pegaPosts().find((post) => {
            return post.id === id;
        }
    );
    postQueVaiSerAtualizado.content = novoConteudo;
}

//DELETE

function apagaPost(id){
    const listaDePostsAtualizada = pegaPosts().filter((postAtual) => {
            return postAtual.id !== id;
        }
    );
    miniTweeter.posts = listaDePostsAtualizada;
    console.log(listaDePostsAtualizada);
}

criaPost({owner:'matheuscamp',content:'segundo tweet'});
criaPost({owner:'matheuscamp',content:'terceiro tweet'});
atualizaContentDoPost(2, 'conteudo atualizado!');
apagaPost(1);
console.log(pegaPosts());
