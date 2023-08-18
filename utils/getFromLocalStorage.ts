export function getFromLocalStorage(name: string) {
  const stringData = localStorage.getItem(name);
  const data = stringData ? JSON.parse(stringData) : null;
  return data

}
