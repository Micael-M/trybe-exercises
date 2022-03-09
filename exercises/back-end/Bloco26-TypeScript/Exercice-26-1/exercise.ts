// Implemetação dos exercícios proposto no conteudo do dia
// 26.1

// Função recepcionista que retorna o nome
// Cujo parâmetro é do tipo string .
export function greeter(name: string) {
  return `Ola ${name}!`;
}

// Função qeu mostra o nome da pessoa e Idade
export function personAge(name: string, age: number) {
  return `${name} tem ${age} anos!`;
}

// Função que soma todos os números de um array
export function add(x: number, y: number): number {
  return x + y;
}

export function sumArray(numbers: number[]): number {
  return numbers.reduce(add, 0);
}

// Função para calcular a área de um triângulo onde X=(B*A)/2
export function triangle(base: number, height: number): number {
  return (base*height)/2;
}

// Função para calcular a área do quadrado X=L*L
export function square(side: number): number {
  return side ** 2;
}

// Função para calcular a área do retângulo X=B*A
export function rectangle(base: number, height: number): number {
  return base * height;
}

