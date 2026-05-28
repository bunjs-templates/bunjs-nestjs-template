import { z } from 'zod';

export const envSchema = z.object({
  // Database
  DATABASE_HOST: z.string().min(1, 'DATABASE_HOST is required'),
  DATABASE_PORT: z.string().min(1, 'DATABASE_PORT is required'),
  DATABASE_USER: z.string().min(1, 'DATABASE_USER is required'),
  DATABASE_PASSWORD: z.string().min(1, 'DATABASE_PASSWORD is required'),
  DATABASE_NAME: z.string().min(1, 'DATABASE_NAME is required'),
});

export type EnvSchema = z.infer<typeof envSchema>;
