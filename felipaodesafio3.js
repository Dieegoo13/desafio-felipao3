let nome = "Diego"; 

let tipo = 4;
let mensagem;

switch (tipo) {
    case 1:
        tipo = "mago";
        mensagem = "magia";
        break;
    case 2:
        tipo = "guerreiro";
        mensagem = "espada";
        break;
    case 3:
        tipo = "monge";
        mensagem = "usou artes marciais";
        break;
    case 4:  
        tipo = "ninja";
        mensagem = "shuriken";
        break;
    default:
        tipo = "erro";
        mensagem = "nenhuma classe encontrada";
        break;
}

class atacar {
    constructor(tipo, mensagem) {
        this.tipo = tipo;
        this.mensagem = mensagem;
    }

    escrever() {
        console.log(`O ${this.tipo} atacou usando ${this.mensagem}`);
    }
}

let ataqueDoPersonagem = new atacar(tipo, mensagem);
ataqueDoPersonagem.escrever();
