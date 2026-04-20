import { defineType, defineField } from 'sanity'

export const eraType = defineType({
  name: 'era',
  title: 'Eras Musicales',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Título de la Era', type: 'string' }),
    defineField({ name: 'startYear', title: 'Año de Inicio', type: 'number' }),
    defineField({ name: 'endYear', title: 'Año de Fin (Dejar vacío si es Presente)', type: 'number' }),
    defineField({ name: 'description', title: 'Descripción', type: 'text' }),
    // Referencia: En lugar de crear el álbum aquí adentro, seleccionas uno de los que ya creaste en la pestaña "Álbumes"
    defineField({
      name: 'albums',
      title: 'Álbumes de esta Era',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'album' }] }],
    }),
    defineField({ name: 'milestones', title: 'Momentos Clave', type: 'array', of: [{ type: 'milestone' }] }),
  ],
})