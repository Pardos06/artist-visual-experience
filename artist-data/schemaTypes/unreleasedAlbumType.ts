import { defineType, defineField } from 'sanity'

export const unreleasedAlbumType = defineType({
  name: 'unreleasedAlbum',
  title: 'Álbumes No Lanzados',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Título', type: 'string' }),
    defineField({ name: 'typography', title: 'Tipografía (opcional)', type: 'string' }),
    defineField({
      name: 'customFont',
      title: 'Archivo de Fuente (.ttf, .otf, .woff2)',
      type: 'file',
      options: { accept: '.ttf,.otf,.woff,.woff2' },
      fields: [{ name: 'fontName', type: 'string', title: 'Nombre de la Fuente' }]
    }),

    defineField({ name: 'year', title: 'Año', type: 'number' }),
    defineField({ name: 'cover', title: 'Portada', type: 'image' }),
    defineField({ name: 'backCover', title: 'Contraportada', type: 'image' }),
    defineField({ name: 'description', title: 'Descripción', type: 'text' }),
    defineField({ name: 'themes', title: 'Temas', type: 'array', of: [{ type: 'string' }] }),
    defineField({ 
      name: 'color', title: 'Paleta (Bordes)', type: 'array', of: [{ type: 'string' }],
      validation: Rule => Rule.min(3).max(3).error('Debes ingresar exactamente 3 colores HEX')
    }),
    defineField({ 
      name: 'backColor', title: 'Paleta (Fondo)', type: 'array', of: [{ type: 'string' }],
      validation: Rule => Rule.min(3).max(3).error('Debes ingresar exactamente 3 colores HEX')
    }),
    defineField({
      name: 'backgroundType',
      title: 'Tipo de Fondo Dinámico',
      type: 'string',
      options: {
        list: [
          { title: 'Blobs Atmosféricos', value: 'blobs' },
          { title: 'Grid Paper', value: 'grid-paper' },
          { title: 'Sophisticated Mesh', value: 'mesh' },
          { title: 'Vibrant Aurora Pop', value: 'aurora-pop' },
        ],
        layout: 'radio'
      },
      initialValue: 'blobs'
    }),
    defineField({ name: 'tracks', title: 'Canciones', type: 'array', of: [{ type: 'track' }] }),
    
    // NUEVOS CAMPOS: Exclusivos de Unreleased
    defineField({ name: 'unreleasedReason', title: 'Motivo de Cancelación', type: 'string' }),
    defineField({ name: 'leakDate', title: 'Fecha de Filtración (Opcional)', type: 'string' }),
    defineField({ 
      name: 'status', 
      title: 'Estado', 
      type: 'string',
      options: { list: ['scrapped', 'shelved', 'reworked'], layout: 'radio' }
    }),
    defineField({ name: 'intendedReleaseDate', title: 'Fecha Original Planeada', type: 'string' }),
  ],
})