export default {
  name: 'album',
  title: 'Album',
  type: 'document',
  fields: [
    {
      name: 'cover',
      title: 'Cover',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
		{
			name: 'alt',
			title: 'Alt text',
			type: 'text',
		},
    {
      name: 'link',
      title: 'Link Spotify',
      type: 'url',
    },
  ],
};