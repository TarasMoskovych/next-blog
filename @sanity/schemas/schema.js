// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    {
      name: 'author',
      type: 'document',
      title: 'Author',
      fields: [
        {
          name: 'displayName',
          type: 'string',
          title: 'Name',
          validation: Rule => Rule.required().min(5),
        },
        {
          name: 'avatar',
          type: 'image',
          title: 'Avatar',
          validation: Rule => Rule.required(),
        },
      ],
    },
    {
      name: 'blog',
      type: 'document',
      title: 'Blog',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
          validation: Rule => Rule.required().min(5),
        },
        {
          name: 'subtitle',
          type: 'string',
          title: 'Subtitle',
        },
        {
          name: 'image',
          type: 'image',
          title: 'Image',
          validation: Rule => Rule.required(),
        },
        {
          name: 'createdAt',
          type: 'date',
          title: 'Date',
        },
        {
          name: 'createdBy',
          type: 'reference',
          title: 'Author',
          to: [{ type: 'author' }],
          validation: Rule => Rule.required(),
        },
        {
          name: 'slug',
          type: 'slug',
          title: 'Slug (URL)',
          validation: Rule => Rule.required().min(5),
        },
      ],
    },
  ]),
})
