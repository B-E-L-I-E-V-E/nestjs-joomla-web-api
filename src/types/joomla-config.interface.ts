import { FactoryProvider, ModuleMetadata } from '@nestjs/common';

export interface JoomlaConfig {
  apiKey: string;
  baseUrl: string;
}

export type JoomlaConfigAsync = Pick<ModuleMetadata, 'imports'> &
  Pick<FactoryProvider<JoomlaConfig>, 'useFactory' | 'inject'>;
