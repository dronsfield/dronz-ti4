export function createId(root: string) {
  return root
    .replace(/ /g, "-")
    .replace(/[^a-zA-Z-]/g, "")
    .toLowerCase();
}
