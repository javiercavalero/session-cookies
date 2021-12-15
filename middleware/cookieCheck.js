module.exports=(req,res,next)=>{
if(req.cookies.bgColor){
    req.session.bgColor=req.cookies.bgColor;
}
next()
}