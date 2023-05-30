import { session, withAuth } from './auth'

import { config } from '@keystone-6/core'
import dotenv from 'dotenv'
import { lists } from './schema'

dotenv.config()

export default withAuth(
  config({
    db: {
      provider: 'postgresql',
      url: process.env.DATABASE_URL!,
    },
    lists,
    session,
    storage: {
      s3_images: {
        kind: 's3',
        type: 'image',
        bucketName: process.env.S3_BUCKET_NAME!,
        region: process.env.S3_REGION!,
        accessKeyId: process.env.S3_ACCESS_KEY_ID!,
        secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
      },
    },
  })
)
