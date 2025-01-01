const createFormData = (obj: any) => {
  const formData = new FormData();


  for (const key in obj) {
    if (key === "gallery" && Array.isArray(obj[key])) {
      // Append all files under the single "gallery" key
      obj[key].forEach((file) => {
        formData.append(key, file);
      });
    } else if (key === "featured_image" && obj[key] instanceof File) {

      console.log('-=-=-=-=-===-');

      // Add only one file for the feature_image key
      formData.append(key, obj[key]);
    }
    else if (key === "featured_image") {

      console.log("cxcxxcxcvxcxv", obj[key]);
      formData.append(key, obj[key]?._id);

    }
    else {
      // Add other fields
      console.log(key + "          ", obj[key]);

      formData.append(key, obj[key]);
    }
  }
  return formData;
};

export default createFormData;

// export default createFormData;
