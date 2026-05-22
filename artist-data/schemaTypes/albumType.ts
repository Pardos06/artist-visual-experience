import { defineType, defineField } from 'sanity'

export const albumType = defineType({
  name: 'album',
  title: 'Álbumes',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Título', type: 'string' }),
    defineField({ name: 'typography', title: 'Tipografía (opcional)', type: 'string' }),
    defineField({
      name: 'customFont',
      title: 'Archivo de Fuente (.ttf, .otf, .woff2)',
      type: 'file',
      options: {
        accept: '.ttf,.otf,.woff,.woff2' // Solo permitimos fuentes
      },
      fields: [
        {
          name: 'fontName',
          type: 'string',
          title: 'Nombre de la Fuente',
          description: 'Escribe el nombre exacto de la familia (ej. CollegiateFLF)'
        }
      ]
    }),

    defineField({ 
      name: 'year', 
      title: 'Fecha de Lanzamiento', 
      type: 'string', // Cambiado a string para soportar valores antiguos (números) y nuevos formatos
      description: 'Puede ser un año (2002) o una fecha (02/02/2002)',
      validation: Rule => Rule.required()
    }),
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
          { title: 'Blobs Atmosféricos (Por defecto)', value: 'blobs' },
          { title: 'Grid Paper (Cuaderno de Bocetos)', value: 'grid-paper' },
          { title: 'Sophisticated Mesh (Lujoso/Orquestal)', value: 'mesh' },
          { title: 'Vibrant Aurora Pop (Graduation)', value: 'aurora-pop' },
        ],
        layout: 'radio'
      },
      initialValue: 'blobs'
    }),
    defineField({ name: 'tracks', title: 'Canciones', type: 'array', of: [{ type: 'track' }] }),
  ],
})