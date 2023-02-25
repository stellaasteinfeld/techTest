module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  middleware: {
    session: {
      enabled: true,
      keys: ['ozJlxXLvoZwrmNGBuTSnfQ', 'BcmLVhql8ckKz2L7BPIZsw', 'rsdnfdVukP2MYvB4kg+Qdw', 'IA8W9LatyqbMHH/i9NPPMA'],
    },
  },
});
