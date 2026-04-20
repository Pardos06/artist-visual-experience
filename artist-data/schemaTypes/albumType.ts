import { defineType, defineField } from 'sanity'

export const albumType = defineType({
  name: 'album',
  title: 'Álbumes',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Título', type: 'string' }),
    defineField({ name: 'year', title: 'Año', type: 'number' }),
    defineField({ name: 'cover', title: 'Portada', type: 'image' }),
    defineField({ name: 'backCover', title: 'Contraportada', type: 'image' }),
    defineField({ name: 'description', title: 'Descripción', type: 'text' }),
    defineField({ name: 'themes', title: 'Temas', type: 'array', of: [{ type: 'string' }] }),
    // Validación estricta para tus 3 colores
    defineField({ 
      name: 'color', title: 'Paleta (Bordes)', type: 'array', of: [{ type: 'string' }],
      validation: Rule => Rule.min(3).max(3).error('Debes ingresar exactamente 3 colores HEX')
    }),
    defineField({ 
      name: 'backColor', title: 'Paleta (Fondo)', type: 'array', of: [{ type: 'string' }],
      validation: Rule => Rule.min(3).max(3).error('Debes ingresar exactamente 3 colores HEX')
    }),
    // Inyectamos el objeto Track que creamos en el paso 1
    defineField({ name: 'tracks', title: 'Canciones', type: 'array', of: [{ type: 'track' }] }),
  ],
})