import { s3 } from 'bun';
import { presignExpiresIn } from './config';

export async function checkObjectExists(key: string) {
  const exists = await s3.exists(key, {
    virtualHostedStyle: process.env.S3_VIRTUAL_HOSTED_STYLE === 'true'
  });
  return exists;
}

export function generatePresignedUrl(key: string) {
  const url = s3.presign(key, {
    virtualHostedStyle: process.env.S3_VIRTUAL_HOSTED_STYLE === 'true',
    expiresIn: presignExpiresIn()
  });
  return url;
}
