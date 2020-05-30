const { REACT_APP_API_URL } = process.env;

export const fetchServices: Function = async () => {
  const response = await fetch(`${REACT_APP_API_URL}/services`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};

export const fetchServiceDetails: Function = async (id: number) => {
  const response = await fetch(`${REACT_APP_API_URL}/services/${id}`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};
