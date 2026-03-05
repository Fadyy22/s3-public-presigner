export function keyFromPathname(pathname: string) {
  console.log('pathname', pathname);
  const key = pathname.startsWith('/') ? pathname.slice(1) : pathname;
  console.log('key', key);
  return key;
}
