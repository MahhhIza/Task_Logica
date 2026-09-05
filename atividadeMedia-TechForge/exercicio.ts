// Exemplos de valores de notas
const notas: number[] = [
    8.5, 6.2, 3.7, 9.0, 7.5,
    5.8, 2.9, 10.0, 6.7, 4.5,
    7.8, 3.2, 8.9, 5.0, 6.0,
    9.5, 1.8, 7.0, 4.0, 3.5,
    8.0, 6.9, 2.5, 7.3, 5.5,
    9.2, 4.8, 3.9, 8.7, 6.5
];

// MÓDULO DE VALIDAÇÃO
// Responsável por garantir a integridade dos dados.

function validarNotas(notas: number[]): boolean {

    // O dataset deve possuir exatamente 30 notas.
    if (notas.length !== 30) {
        return false;
    }

    // Verificação de cada nota utilizando estrutura de repetição.
    for (let i = 0; i < notas.length; i++) {

        // Verifica se o valor é realmente numérico.
        if (typeof notas[i] !== "number") {
            return false;
        }

        // Verifica se a nota está dentro do intervalo permitido.
        if (notas[i] < 0.0 || notas[i] > 10.0) {
            return false;
        }
    }

    return true;
}

// MÓDULO DE TRIAGEM
// Responsável por separar as notas em três categorias.

function separarNotas(
    notas: number[],
    aprovados: number[],
    exame: number[],
    reprovados: number[]
): void {

    for (let i = 0; i < notas.length; i++) {

        const nota = notas[i];

        // Aprovado: nota maior ou igual a 7.0
        if (nota >= 7.0) {
            aprovados.push(nota);

        // Exame: nota entre 4.0 e menor que 7.0
        } else if (nota >= 4.0) {
            exame.push(nota);

        // Reprovado: nota menor que 4.0
        } else {
            reprovados.push(nota);
        }
    }
}

// MÓDULO DE ORDENAÇÃO
// Responsável por ordenar as notas em ordem crescente.
// Não utiliza .sort().

function ordenarNotas(notas: number[]): number[] {

    // Cria uma cópia para não modificar o array original.
    const notasOrdenadas: number[] = [...notas];

    const tamanho = notasOrdenadas.length;

    // Bubble Sort utilizando índices e trocas manuais.
    for (let i = 0; i < tamanho - 1; i++) {

        for (let j = 0; j < tamanho - 1 - i; j++) {

            if (notasOrdenadas[j] > notasOrdenadas[j + 1]) {

                const temporaria = notasOrdenadas[j];

                notasOrdenadas[j] = notasOrdenadas[j + 1];

                notasOrdenadas[j + 1] = temporaria;
            }
        }
    }

    return notasOrdenadas;
}

// MÓDULO DE RELATÓRIO
// Responsável somente pela apresentação dos resultados.
function gerarRelatorio(
    aprovados: number[],
    exame: number[],
    reprovados: number[]
): void {

    console.log("\n============================================");
    console.log("           RELATÓRIO FINAL");
    console.log("============================================");

    console.log("\nAprovados:");
    console.log(aprovados.join(" - ") || "Nenhum aluno");

    console.log("\nExame:");
    console.log(exame.join(" - ") || "Nenhum aluno");

    console.log("\nReprovados:");
    console.log(reprovados.join(" - ") || "Nenhum aluno");

    console.log("\nQuantidade de aprovados:", aprovados.length);
    console.log("Quantidade em exame:", exame.length);
    console.log("Quantidade de reprovados:", reprovados.length);

    console.log("\n============================================");
}

// FUNÇÃO PRINCIPAL
// Responsável por controlar o fluxo do processamento.
function executarProcessamento(): void {

    // 1. Validação dos dados antes de qualquer processamento.
    if (!validarNotas(notas)) {

        console.log("Dados inválidos. O processamento foi interrompido.");

        return;
    }

    // 2. Criação dos três arrays de saída.
    const aprovados: number[] = [];
    const exame: number[] = [];
    const reprovados: number[] = [];

    // 3. Triagem das notas.
    separarNotas(
        notas,
        aprovados,
        exame,
        reprovados
    );

    // 4. Ordenação de cada categoria.
    const aprovadosOrdenados = ordenarNotas(aprovados);
    const exameOrdenado = ordenarNotas(exame);
    const reprovadosOrdenados = ordenarNotas(reprovados);

    // 5. Geração do relatório final.
    gerarRelatorio(
        aprovadosOrdenados,
        exameOrdenado,
        reprovadosOrdenados
    );
}

// EXECUÇÃO DO PROGRAMA
executarProcessamento();