// Importa as funções para ler e escrever arquivos de forma assíncrona
import { readFile, writeFile } from "fs/promises";

// Define como vai fica cada item do estoque
type ItemEstoque = {
    id: number;
    nome: string;
    preco: number;
    quantidade: number;
};

// Define as informações no relatório final
type RelatorioAuditoria = {
    valorTotalEstoque: number;
    produtosCriticos: ItemEstoque[];
};

// Lê o arquivo de estoque
readFile("./estoque.json", "utf-8")
    .then((dados) => {
        
        // Transforma o JSON em dados que o TS consegue usar 
        const estoque: ItemEstoque[] = JSON.parse(dados);
        
        // Soma o valor de todos os produtos em estoque
        const valorTotalEstoque = estoque.reduce(
            (soma, item) => soma + item.preco * item.quantidade,
            0
        );
        
        console.log("Valor total do estoque:", valorTotalEstoque);

        // Filtra os produtos com menos de 5 unidades
        const produtosCriticos = estoque.filter(
            (item) => item.quantidade < 5
        );
        
        console.log("Produtos críticos:", produtosCriticos);

        // Monta o relatório com os dados calculados
        const relatorio: RelatorioAuditoria = {
            valorTotalEstoque,
            produtosCriticos
        };

        // Salva o relatório em um novo arquivo
        return writeFile(
            "./auditoria.json",
            JSON.stringify(relatorio, null, 2),
            "utf-8"
        );
    })
    .then(() => {

        // Mostra que o arquivo foi salvo corretamente
        console.log("Auditoria salva com sucesso em ./auditoria.json");
    })
    .catch((erro: unknown) => {

        // Mostra uma mensagem caso aconteça algum erro,
        // que espero que não já que conferi umas três vezes 
        // antes de enviar kkkk
        console.error("Erro ao ler o arquivo:", erro);
    });