const array = [5, 6, 10, 4, 3, 7, 1];

const media = (() => {
  const soma = array.reduce((atual, proximo) => {
    return atual + proximo;
  });
  const length = array.length;
  return soma / length;
})();

console.log(media);
