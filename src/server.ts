import { app } from './app.js';

app
  .listen({
    port: 3333,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log(`Server rodando na porta 3333`);
  });
