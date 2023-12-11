if (upload_image.current.files.length) {
    formData.append("upload_image", upload_image.current.files[0]);
}

if (upload_clip.current.files.length) {
    formData.append("upload_clip", upload_clip.current.files[0]);
}