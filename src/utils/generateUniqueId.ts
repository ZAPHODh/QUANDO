export function generateUniqueId(): string {
  const characters: string =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let uniqueId: string = '';
  const length: number = 9;

  for (let i = 0; i < length; i++) {
    const randomIndex: number = Math.floor(Math.random() * characters.length);
    uniqueId += characters.charAt(randomIndex);
  }

  return uniqueId;
}
