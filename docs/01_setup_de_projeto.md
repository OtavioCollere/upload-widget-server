# 🛠️ Setup de Projeto

## 📌 Node e TSConfig

- Ao iniciar o projeto, verifique a **versão do Node** instalada.
- Acesse o repositório [`tsconfig/bases`](https://github.com/tsconfig/bases) no GitHub e copie o `tsconfig.json` correspondente à sua versão do Node.
- Altere a propriedade `moduleResolution` para `"bundler"`, pois **no deploy faremos bundling e publicaremos como JavaScript, não TypeScript**.

---

## 📦 O que é bundling?

**Bundling** é o processo de agrupar arquivos do projeto (`.ts`, `.js`, `.css` etc.) em um ou poucos arquivos finais otimizados em JavaScript puro.

### 🧠 Benefícios do bundling:

- **Performance**: reduz o número de requisições HTTP (especialmente no navegador).
- **Compatibilidade**: transforma código moderno em JavaScript compatível com ambientes que não suportam as últimas features.
- **Tree shaking**: remove código morto (não utilizado).
- **Minificação**: reduz tamanho removendo espaços, comentários e renomeando variáveis.

---

## 📚 ECMAScript Modules (ESM)

Bundlers modernos permitem o uso de **ES Modules**, o sistema de módulos padrão do JavaScript.

### O que o ESM faz?

- Permite importar/exportar entre arquivos usando `import` e `export`.
- Cada arquivo é um **módulo com escopo próprio**, evitando vazamentos de variáveis no escopo global (como ocorria em `<script>` no HTML).

---

## 🧾 Comandos no `package.json`

Adicione comandos para rodar o projeto diretamente via `ts-node`.  
**(Não será detalhado aqui, pois é uma etapa básica.)**

---

## 🎯 Target: ESNext

No `tsconfig.json`, altere o `target` para `"ESNext"`.

### Por que usar `"ESNext"`?

- **Compatível com Node 22**: não precisa transpilar recursos modernos → código mais leve e rápido.
- **Preserva features modernas**: como `#private`, `top-level await`, `import.meta` etc.
- **Compatível com `moduleResolution: "bundler"`**: entrega código moderno para bundlers modernos.
- **Futuro à prova**: seu projeto já estará preparado para futuras atualizações do JavaScript.

> ⚠️ Evite `"ESNext"` se precisar rodar em ambientes antigos ou usar libs incompatíveis com ESM.

---

## 🔗 Imports com `@/`

Configure os **paths** no `tsconfig` para permitir importar usando `@/`:

```json
"paths": {
  "@/*": ["./src/*"]
}
```

# 🧪 Setup de Testes com Vitest

## 📦 Instalações necessárias

```bash
npm install -D vitest vite-tsconfig-paths dotenv-cli
```

vitest: ferramenta de testes.

vite-tsconfig-paths: permite que o Vitest entenda os aliases definidos com @/asterisco no tsconfig.json.

dotenv-cli: usado para carregar variáveis de ambiente no contexto de teste, já que o Vitest não tem suporte nativo à flag --env-file como o Node.


