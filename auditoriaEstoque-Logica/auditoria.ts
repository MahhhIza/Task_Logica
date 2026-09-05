import { readFile, writeFile } from "fs/promises";

type ItemEstoque = {
    id: number;
    nome: string;
    preco: number;
    quantidade: number;
};

type RelatorioAuditoria = {
    valorTotalEstoque: number;
    produtosCriticos: ItemEstoque[];
};

readFile("./estoque.json", "utf-8")
    .then((dados) => {
        const estoque: ItemEstoque[] = JSON.parse(dados);
        const valorTotalEstoque = estoque.reduce(
            (soma, item) => soma + item.preco * item.quantidade,
            0
        );
        
        console.log("Valor total do estoque:", valorTotalEstoque);

        const produtosCriticos = estoque.filter(
            (item) => item.quantidade < 5
        );
        
        console.log("Produtos críticos:", produtosCriticos);

        const relatorio: RelatorioAuditoria = {
            valorTotalEstoque,
            produtosCriticos
        };

        return writeFile(
            "./auditoria.json",
            JSON.stringify(relatorio, null, 2),
            "utf-8"
        );
    })
    .then(() => {
        console.log("Auditoria salva com sucesso em ./auditoria.json");
    })
    .catch((erro: unknown) => {
        console.error("Erro ao ler o arquivo:", erro);
    });