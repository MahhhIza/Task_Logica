// Cria um array para guardar as medições
const valores: number[] = [];

// Repete o processo 5 vezes para receber as medições
for (let i = 0; i < 5; i++) {
    
    // Pede uma medição ao usuário
    const entrada: string | null = prompt(`Digite a ${i + 1}ª medição:`);

    // Converte o valor digitado para número
    const valor: number = Number(entrada);

    // Adiciona a medição no array
    valores.push(valor);
}

// Começa a soma com valor zero
let soma: number = 0;

// Percorre todas as medições para calcular a soma
for (const valor of valores) {
    soma += valor;
}

// Calcula a média dividindo a soma pela quantidade de valores
const media: number = soma / valores.length;

// Mostra os resultados no console
console.log("Soma das medições:", soma);
console.log("Média das medições:", media);

// Mostra os resultados também em uma mensagem na tela
alert(`Soma das medições: ${soma}\nMédia das medições: ${media}`);