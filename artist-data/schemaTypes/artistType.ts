import { defineType, defineField } from 'sanity'

export const artistType = defineType({
  name: 'artist',
  title: 'Artistas',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Nombre del Artista', type: 'string' }),
    defineField({ name: 'hero', title: 'Sección Hero', type: 'hero' }),
    defineField({ name: 'overview', title: 'Visión General', type: 'overview' }),
    // Referencia a las Eras
    defineField({
      name: 'eras',
      title: 'Eras Musicales',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'era' }] }],
    }),
    defineField({ name: 'awards', title: 'Premios', type: 'array', of: [{ type: 'award' }] }),
    defineField({ name: 'influence', title: 'Influencias', type: 'array', of: [{ type: 'influence' }] }),
    defineField({ name: 'legacy', title: 'Legado', type: 'legacy' }),
  ],
})