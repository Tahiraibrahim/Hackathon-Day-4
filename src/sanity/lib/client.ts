import { createClient } from 'next-sanity'

// import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId: "bjih1prq",
  dataset: "production",
  apiVersion:"2025-01-24",
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
