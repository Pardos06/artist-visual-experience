import { defineType, defineField } from 'sanity'

export const artistType = defineType({
  name: 'artist',
  title: 'Artistas',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Nombre del Artista', type: 'string' }),
    defineField({ name: 'hero', title: 'Sección Hero', type: 'hero' }),
    defineField({
      name: 'artistFont',
      title: 'Fuente Global del Artista',
      type: 'file',
      options: { accept: '.ttf,.otf,.woff2' },
      fields: [
        { name: 'fontName', type: 'string', title: 'Nombre de la Familia tipográfica' }
      ]
    }),
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
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      description: 'Identificador para la URL (ej. kanye, kendrick-lamar)',
      options: {
        source: 'name', // Esto genera el slug automáticamente desde el nombre
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }
  ],
})