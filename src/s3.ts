import { s3 } from 'bun';
import { presignExpiresIn } from './config';

export async function checkObjectExists(key: string) {
  const decodedKey = decodeURIComponent(key);
  const exists = await s3.exists(decodedKey, {
    virtualHostedStyle: process.env.S3_VIRTUAL_HOSTED_STYLE === 'true'
  });
  return exists;
}

export function generatePresignedUrl(key: string) {
  const decodedKey = decodeURIComponent(key);
  const url = s3.presign(decodedKey, {
    virtualHostedStyle: process.env.S3_VIRTUAL_HOSTED_STYLE === 'true',
    expiresIn: presignExpiresIn()
  });
  return url;
}
