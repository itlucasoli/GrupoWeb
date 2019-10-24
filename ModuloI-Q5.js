const aluno = {
  nome: "iago",
  notas: [
    { nome: "fisica", valor: 5 },
    { nome: "estatistica", valor: 4 },
    { nome: "probabilidade", valor: 1 }
  ]
};

let notas = aluno.notas.map(nota => {
  return nota.valor;
});

console.log(notas);
