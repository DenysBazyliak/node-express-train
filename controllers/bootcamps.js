
// @desc  get all bootcamps
// @route GET /api/v1/bootcamps
// @access Public
exports.getBootcamps=( req, res, next)=>{
    res.status(200).send({success:true, message:"Show all bootcamps" } )
}

// @desc  get single bootcamps
// @route GET /api/v1/bootcamps/:id
// @access Public
exports.getBootcamp=( req, res, next)=>{
    res.status(200).send({success:true, message:`Get bootcamp ${req.params.id}` } )
}

// @desc   Create a bootcamp
// @route  POST /api/v1/bootcamps/
// @access Private
exports.createBootcamp=( req, res, next)=>{
    res.status(200).send({success:true, message:"Create all bootcamps" } )
}

// @desc   Update a bootcamp
// @route  PUT /api/v1/bootcamps/:id
// @access Private
exports.updateBootcamp=( req, res, next)=>{
    res.status(200).send({success:true, message:`Update bootcamp ${req.params.id}` } )
}

// @desc   Delete a bootcamp
// @route  DELETE /api/v1/bootcamps/:id
// @access Private
exports.deleteBootcamp=( req, res, next)=>{
    res.status(200).send({success:true, message:`Delete bootcamp ${req.params.id}` } )
}