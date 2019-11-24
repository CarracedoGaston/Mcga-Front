const postApi = (data, url) => {
  fetch('http://localhost:5000/api/'+url, {
    method: 'POST',
    headers: {"Accept": 'application/json',
              "Content-Type": "application/json"},
    body: JSON.stringify(data)
  })
  .catch(err => console.log(err))
}

export default postApi