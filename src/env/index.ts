import 'dotenv/config';
import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
  DATABASE_URL: z.string().min(1),
  PORT: z.coerce.number(), // Se a porta estiver como string, o coerce converte para number()
});

const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
  console.error('Variaveis ambiente invalidas', _env.error.format());

  throw new Error('Variaveis de ambiente inválidas');
}

export const env = _env.data; // O data retorna o objeto validado com as variaveis de ambiente
