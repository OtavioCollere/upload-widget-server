import { db } from '@/infra/db'
import { schema } from '@/infra/db/schema'
import { fakerPT_BR as faker } from '@faker-js/faker'
import type { InferInsertModel } from 'drizzle-orm'

export async function makeUpload(
  overrides?: Partial<InferInsertModel<typeof schema.uploads>>
) {
  const fileName = faker.system.fileName()

  const result = await db
    .insert(schema.uploads)
    .values({
      ...overrides,
      name: fileName,
      remoteKey: `images/${fileName}`,
      remoteUrl: `http://example.com/images/${fileName}`,
    })
    .returning()

  return result[0]
}
