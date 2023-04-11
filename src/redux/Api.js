const fetchAPI = async (URL) => {
  const request = await fetch(URL, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const res = await request.json();
  return res;
};

export default fetchAPI;
