export default {
  name: 'album',
  title: 'Album',
  type: 'document',
  fields: [
		{
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'cover',
      title: 'Cover',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt text',
          type: 'string',
        },
      ],
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
    },
    {
      name: 'hoverText',
      title: 'Hover Text',
      type: 'string',
    },
  ],
}
