export function githubUrl(path: string) {
  const filePath = path.replace(/\/$/, "") + ".mdx";

  return `https://github.com/getsafepay/safepay-docs/edit/main/pages${filePath}`;
}
