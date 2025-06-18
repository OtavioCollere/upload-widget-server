import { beforeAll, describe, expect, it, vi } from 'vitest'
import { randomUUID } from 'node:crypto'
import { exportUploads } from './export-uploads'
import { makeUpload } from '@/test/factories/make-upload'
import * as upload from '@/infra/storage/upload-file-to-storage'

describe('upload image', () => {
  it('should be able to export uploads', async () => {
    const uploadStub = vi
      .spyOn(upload, 'uploadFileToStorage')
      .mockImplementation(async () => {
        return {
          key: `${randomUUID}.csv`,
          url: 'http://example.com/file.csv',
        }
      })

    // spy / stub ( spy = monitorar algo que foi executado // stub =)

    const namePattern = randomUUID()

    const upload1 = await makeUpload({ name: `${namePattern}.webp` })
    const upload2 = await makeUpload({ name: `${namePattern}.webp` })
    const upload3 = await makeUpload({ name: `${namePattern}.webp` })
    const upload4 = await makeUpload({ name: `${namePattern}.webp` })
    const upload5 = await makeUpload({ name: `${namePattern}.webp` })

    const sut = await exportUploads({
      searchQuery: namePattern,
    })
  })
})
