

export const  getPcap = async () => {
    const response = await fetch("http://127.0.0.1:8000");
    return response.json();
  };
