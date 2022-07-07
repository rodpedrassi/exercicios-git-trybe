// 7 - Escreva um teste que verifique a chamada da callback de uma função uppercase, que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

it('Checa se ao receber teste retorna TESTE', (done) => {
  // expect(uppercase('teste', callback)).toBe('TESTE');
  uppercase('teste', (string) => {
    expect(string).toBe('TESTE');
  });
  done();
});
