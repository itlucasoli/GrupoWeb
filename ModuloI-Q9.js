const joao = {
  nome: "João",
  saudacao() {
    console.log(`Olá ${this.nome}`);
  }
};

const maria = joao;
maria.nome = "Maria";
maria.saudacao();

joao.saudacao();
