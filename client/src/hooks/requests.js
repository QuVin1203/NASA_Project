const API_URL='http://localhost:8000'

async function httpGetPlanets() {
  const response=await fetch(`${API_URL}/planets`)
  return await response.json()
  // Load planets and return as JSON.
}

async function httpGetLaunches() {
  const response=await fetch(`${API_URL}/launches`)
  const fetchedLaunches=await response.json()
  return fetchedLaunches.sort((a,b)=>{
    return a.flightNumber-b.flightNumber
  })
}

async function httpSubmitLaunch(launch) {
  try{
  await fetch(`${API_URL}/launches`,{
    method:'post',
    headers:{
      'Content_Type'
:'application/json'  ,
  },
  body:JSON.stringify(launch)
  })
}catch(err){
  return{
    ok:false,
  }
}
}

async function httpAbortLaunch(id) {
  return await fetch(`${API_URL}/launches/${id}`,{
    method:'delete',
  })
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};