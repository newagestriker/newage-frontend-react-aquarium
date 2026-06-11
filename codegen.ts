/** @type {import('@graphql-codegen/cli').CodegenConfig} */
const config = {
  schema: 'http://localhost:3000/graphql',
  documents: ['src/**/*.tsx', 'src/**/*.ts', 'src/**/*.graphql'],
  generates: {
    'src/graphql/generated/': {
      preset: 'client',
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
  config: {
    useTypeImports: true
  },
  ignoreNoDocuments: true,
  
};

export default config;
