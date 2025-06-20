

### Boas práticas 

Boas práticas: Tipos de ID
Existem diferentes formas de gerar IDs em sistemas. As mais comuns são autoincrement e UUID.

Autoincrement (IDs sequenciais)
Vantagens:

Nunca se repetem.

São ordenáveis (úteis para ordenação por data de criação, por exemplo).

Leves em termos de armazenamento.

Desvantagens:

Com grandes volumes de dados, especialmente em paginação com OFFSET, a performance cai. Exemplo:

Se você faz SELECT * FROM usuarios LIMIT 5 OFFSET 10000, o banco precisa ler 10.005 registros e descartar os 10.000 primeiros — isso escala mal.

Uma alternativa mais performática é a paginação com cursor (cursor-based pagination), que usa algo como WHERE id > último_id LIMIT 5.

IDs sequenciais são inseguros para URLs públicas. Por exemplo, /usuarios/1, /usuarios/2 permitem que alguém descubra outros registros apenas incrementando.

UUID (Universally Unique Identifier)
Vantagens:

Muito difícil de adivinhar. Seguro para URLs públicas.

Permite gerar o ID no cliente, sem esperar pelo backend.

Muito baixo risco de colisão.

Desvantagens:

Não são ordenáveis por padrão.

Ocupam mais espaço que inteiros (16 bytes contra 4).

Podem impactar performance em índices e joins em alguns bancos.

UUIDv7 (solução mista)
O UUIDv7 é um padrão novo que tenta unir o melhor dos dois mundos:

É um UUID, então mantém unicidade global e segurança para exposição pública.

Mas é ordenável, pois é baseado em timestamp.

Funciona bem com paginação baseada em cursor.

Ideal para sistemas distribuídos e modernos.

Pode ser gerado tanto no frontend quanto no backend.

Em resumo, o UUIDv7 oferece a segurança e flexibilidade dos UUIDs tradicionais, com a ordenação e eficiência que antes só existia em IDs sequenciais. Para novos projetos, é uma opção muito interessante.







