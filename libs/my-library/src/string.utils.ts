export function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function formatName(name: string): string {
  return `${capitalizeFirstLetter(name)}`;
}
