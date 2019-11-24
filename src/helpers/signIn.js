const sigIn = (data, url) => {
  return fetch('http://localhost:5000/api/user/'+url, {
    method: 'POST',
    headers: {"Accept": 'application/json',
              "Content-Type": "application/json"},
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .catch(err => console.log(err))
}

export default sigIn