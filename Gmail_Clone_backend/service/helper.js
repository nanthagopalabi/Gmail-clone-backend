import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: 'dnspnhmop',
  api_key: '586192642956389',
  api_secret: 'gT--8MP3ukQzi62wbdrgQ_rVISA',

});

export async function handleUpload(file) {
  const res = await cloudinary.uploader.upload(file,{
    resource_type: "auto",
  });
  return res;
}

