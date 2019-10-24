const obj = {
  temp: 0,
  get temperatura() {
    return this.temp;
  },
  set temperatura(i) {
    if (i < 0) {
      throw new Error("Valor negativo");
    } else {
      this.temp = i;
    }
  }
};

obj.temperatura = 10;
