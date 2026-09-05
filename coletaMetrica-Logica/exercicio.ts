const valores: number[] = [];

for (let i = 0; i < 5; i++) {
    const entrada: string | null = prompt(`Digite a ${i + 1}ª medição:`);

    const valor: number = Number(entrada);

    valores.push(valor);
}

let soma: number = 0;

for (const valor of valores) {
    soma += valor;
}

const media: number = soma / valores.length;

console.log("Soma das medições:", soma);
console.log("Média das medições:", media);

alert(`Soma das medições: ${soma}\nMédia das medições: ${media}`);