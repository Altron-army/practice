exports.functioncontrollerwala=function (req, res) {
    res.send("check kr k12388284 raha hu");
};


exports.functionpost=function (req,res)
{
    const {name}=req.body
    console.log("chal gya :",name)
    res.send("successful ho gya hai post operation")
};