const getData= async ()=> {
   const res =  await axios.get('http://geolocation-db.com/json/')
    console.log(res);

}

getData()
