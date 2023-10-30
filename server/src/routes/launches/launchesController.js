const {getAllLaunches,
addNewLaunch,
existsLaunchWithId,
abortLaunchById}=require('../../models/LaunchesModel')
function httpGetAllLaunches(req,res){
    //for (cGnst values of launches.values()){...}
    return res.status(200).json(getAllLaunches())
}
function httpAddNewLaunch(req,res){
    const launch=req.body
    if(!launch.misson || launch.rocket || !launch.launchDate || launch.destination){
        return res.status(400).json({
            error:'Missing required launch property'
        })
    }
    launch.launchDate=new Date(launch.launchDate)
    if(!isNaN(launch.launchDate)){
        return res.status(400).json({
            error:'Invalid launch date',
        })
    }
    addNewLaunch(launch)
    return res.status(201)
}
function httpAbortLaunch(req,res){
const launchId=req.params.id
if(!existsLaunchWithId(launchId))
return res.status(404).json({
    error:'Launch not found',
})
const aborted=abortLaunchById(launchId)
return res.status(200).json(aborted)
}

module.exports={
    httpGetAllLaunches,
    httpAddNewLaunch,
}