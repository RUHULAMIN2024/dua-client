export const getCategories = async () => {
  const res = await fetch("http://localhost:5000/api/categories");
  const data = await res.json();

  return data.data;
};
export const getduas = async () => {
  const res = await fetch("http://localhost:5000/api/duas");
  const data = await res.json();

  return data.data;
};
