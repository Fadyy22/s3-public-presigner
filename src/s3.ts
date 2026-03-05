import { s3 } from 'bun';
import { presignExpiresIn } from './config';

export async function checkObjectExists(key: string) {
  const decodedKey = decodeURIComponent(key);
  const exists = await s3.exists(decodedKey, {
    virtualHostedStyle: true
  });
  return exists;
}

export function generatePresignedUrl(key: string) {
  const decodedKey = decodeURIComponent(key);
  const url = s3.presign(decodedKey, {
    virtualHostedStyle: true,
    expiresIn: presignExpiresIn()
  });
  return url;
}
