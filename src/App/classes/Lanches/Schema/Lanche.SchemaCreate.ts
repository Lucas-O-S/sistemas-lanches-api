
export const LancheSchemaCreate = {
    schema: {
      type: 'object',
      properties: {
        dataLiberacao: {         
          type: 'string', 
          format: 'date', 
          example: '1000-01-01' },
        alunoId: {
          type: 'number',
          example: '1'
        },
        quantidade: {
          type: 'number',
          example: '1'
        }
      },
    },
}
  