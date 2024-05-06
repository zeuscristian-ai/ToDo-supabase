const apiRequest = async (url = "", option = null, errorMsg = null) => {
  try {
    const response = await fetch(url, option);
    if (!response.ok) throw Error("un probleme est survenue");
  } catch (error) {
    errorMsg = error.message;
  } finally {
    return errorMsg;
  }
};

export default apiRequest;
