# TaskFlow — sessão-ponte multipágina e localStorage

Mini-projecto para demonstrar três páginas HTML, vários ficheiros JavaScript e persistência local antes do projecto RentEase.

## Objectivo

No final da demonstração, os alunos devem conseguir explicar:

- por que cada página HTML é um documento separado;
- por que `storage.js` é carregado antes do script específico da página;
- como as três páginas partilham dados através da mesma chave de `localStorage`;
- por que arrays e objectos precisam de `JSON.stringify()` e `JSON.parse()`;
- que alterações exigem `saveTasks()` e uma nova renderização.

## Executar

Abrir `index.html` num browser moderno.

## Estrutura

```text
sessao-ponte-taskflow/
├── index.html
├── tasks.html
├── new-task.html
├── css/
│   └── styles.css
└── js/
    ├── storage.js
    ├── home.js
    ├── tasks.js
    └── new-task.js
```

## Modelo de dados

```js
{
  id: Date.now(),
  title: "Rever arrays",
  category: "Estudo",
  isCompleted: false
}
```

A chave usada é `taskFlowTasks`.

## Ordem de demonstração

1. Abrir as três páginas e seguir os links de navegação.
2. Comparar os scripts ligados em cada HTML.
3. Demonstrar `localStorage.setItem()` e `getItem()` com uma string.
4. Construir `loadTasks()` e `saveTasks()` em `storage.js`.
5. Criar uma tarefa em `new-task.js`.
6. Renderizar e concluir tarefas em `tasks.js`.
7. Calcular o resumo em `home.js`.
8. Recarregar e navegar entre páginas para confirmar persistência.

## Reiniciar a demonstração

Na consola do browser:

```js
localStorage.removeItem("taskFlowTasks");
location.reload();
```

Usar apenas com os dados fictícios desta demonstração.

