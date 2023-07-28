import axios from "axios";


// GenerateGraph Pcap APi
export const  getPcap = async () => {
    const response = await fetch("http://127.0.0.1:8000");
    return response.json();
  };



  export const FileUpload = async (file) => {
    if (!file) return; // No file selected
  
    const formData = new FormData();
    formData.append("pcapng_file", file);
  
    try {
      const response = await axios.post("http://127.0.0.1:8000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      if (response.status === 200) {
        console.log(response.data)
        return response.data;
      } else {
        throw new Error("Failed to upload the file.");
      }
    } catch (error) {
      throw new Error("Error occurred during file upload:");
    }
  };
  

  export const getLoginToken = async (loginFormData) => {
    try {
      if (!loginFormData) return;
      console.log(loginFormData);
      const params = new URLSearchParams(loginFormData);


      const response = await fetch(import.meta.env.VITE_BACKEND_URL + "/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded", 
        },
        body: params
        , 
      });
  
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
      throw new Error("Error occurred during login request.");
    }
  };