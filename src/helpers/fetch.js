const fetchApi = url => {
  return fetch('http://localhost:5000/api/'+url)
    .then(res => res.json())
}

export default fetchApi