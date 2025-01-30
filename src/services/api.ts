
const BASE_URL = 'https://dummyjson.com/products/';

export const fetchProduct = async (id: number) => {
  const response = await fetch(`${BASE_URL}${id}`);
  if (!response.ok) {
    throw new Error(`API error: ${response.statusText}`);
  }
  return response.json();
};
