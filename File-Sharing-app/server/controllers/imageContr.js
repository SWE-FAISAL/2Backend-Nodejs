import File from "../models/schema.js";

const uploadImage= async (req, res)=>{
    const fileobj = {
        path : req.file.path,
        name : req.file.originalname
    }
    try {
       const file = await File.create(fileobj);
       res.status(200).json({path:`http://127.0.0.1:8000/file/${file._id}`});
    } catch (error) {
        console.error('error from controler', error.message);
        res.status(500).json({error:error.message});
    }
}
// export default uploadImage;

const downloadImage= async (request, response)=>{
    try {
        const file = await File.findById(request.params.fileId);
        file.downloadContent++;
        await file.save();
        response.download(file.path, file.name);
    } catch (error) {
        console.log(error.message)
        response.status(500).json({error:error.message});
    }
}

export {uploadImage, downloadImage};