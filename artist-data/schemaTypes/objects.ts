import { defineType, defineField } from 'sanity'

export const heroType = defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'object',
  fields: [
    defineField({ name: 'image', title: 'Imagen Hero', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'quote', title: 'Cita / Frase', type: 'text' }),
  ],
})

export const overviewType = defineType({
  name: 'overview',
  title: 'Visión General',
  type: 'object',
  fields: [
    defineField({ name: 'biography', title: 'Biografía', type: 'text' }),
    defineField({ name: 'born', title: 'Fecha de Nacimiento', type: 'string' }),
    defineField({ name: 'origin', title: 'Origen', type: 'string' }),
    defineField({ name: 'genres', title: 'Géneros', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'activeYears', title: 'Años Activos', type: 'string' }),
  ],
})

export const awardType = defineType({
  name: 'award',
  title: 'Premio',
  type: 'object',
  fields: [
    defineField({ name: 'name', title: 'Nombre del Premio', type: 'string' }),
    defineField({ name: 'year', title: 'Año', type: 'number' }),
    defineField({ name: 'category', title: 'Categoría', type: 'string' }),
  ],
})

export const influenceType = defineType({
  name: 'influence',
  title: 'Influencia',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Título', type: 'string' }),
    defineField({ name: 'description', title: 'Descripción', type: 'text' }),
  ],
})

export const legacyType = defineType({
  name: 'legacy',
  title: 'Legado',
  type: 'object',
  fields: [
    defineField({ name: 'summary', title: 'Resumen del Legado', type: 'text' }),
  ],
})

export const milestoneType = defineType({
  name: 'milestone',
  title: 'Momento Clave',
  type: 'object',
  fields: [
    defineField({ name: 'date', title: 'Fecha (ej. 2004 o Ago 2004)', type: 'string' }),
    defineField({ name: 'event', title: 'Evento', type: 'string' }),
    defineField({ name: 'description', title: 'Descripción', type: 'text' }),
    defineField({
      name: 'type',
      title: 'Tipo de Evento',
      type: 'string',
      options: {
        list: [
          { title: 'Premio', value: 'award' },
          { title: 'Gira', value: 'tour' },
          { title: 'Personal', value: 'personal' },
          { title: 'Escándalo', value: 'scandal' },
        ],
      },
    }),
  ],
})

export const trackType = defineType({
  name: 'track',
  title: 'Canción',
  type: 'object',
  fields: [
    defineField({ name: 'number', title: 'Número', type: 'number' }),
    defineField({ name: 'title', title: 'Título', type: 'string' }),
    defineField({ name: 'duration', title: 'Duración', type: 'string' }),
    defineField({ name: 'featuredArtists', title: 'Artistas Invitados', type: 'array', of: [{ type: 'string' }] }),
  ],
})