const createFormData = (obj: any) => {
  const formData = new FormData();

  for (const key in obj) {
    if (key === "gallery" && Array.isArray(obj[key])) {
      obj[key].forEach((file) => {
        formData.append(key, file);
      });
    } else if (key === "featured_image" && obj[key] instanceof File) {

      formData.append(key, obj[key]);
    }
    else if (key === "featured_image") {
      formData.append(key, obj[key]?._id);
    }
    else {
      formData.append(key, obj[key]);
    }
  }
  return formData;
};

export default createFormData;

// export default createFormData;
