import { config } from '@dotenvx/dotenvx';
import { Injectable } from '@nestjs/common';
import { type EnvSchema, envSchema } from './config.types';

@Injectable()
export class ConfigService {
  readonly e: EnvSchema;

  static instance: ConfigService;

  constructor() {
    // Load environment variables from .env file
    config();

    const parsed = envSchema.safeParse(process.env);
    if (parsed.success) {
      this.e = parsed.data;
      return;
    }

    console.error('❌ Invalid environment variables:');
    for (const err of parsed.error.issues) {
      console.error(`- ${err.path.join('.')}: ${err.message}`);
    }
    process.exit(1);
  }
}
