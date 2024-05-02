export function normalizeString(inputString: string): string {
  const unescapedString = inputString.replace(/\\(.)/g, '$1');

  const decodedString = unescapedString.replace(/&#x([0-9A-F]{2});/gi, (_, grp) =>
      String.fromCharCode(parseInt(grp, 16))
  );

  return decodedString.replace(/&amp;/g, "&")
          .replace(/&lt;/g, "<")
          .replace(/&gt;/g, ">")
          .replace(/&quot;/g, "\"")
          .replace(/&#039;/g, "'");
}