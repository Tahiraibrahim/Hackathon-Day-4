import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryTypes'
import {postType} from './postType'
import {authorType} from './authorTypes'
import { product } from './product'



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType,product]
}
