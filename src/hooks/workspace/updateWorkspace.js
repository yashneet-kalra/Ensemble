const UpdateWorkspace = async (title, uid, wuid) => {
  const Data = {
    title,
    uid,
    wuid,
  };
  const BaseUrl = import.meta.env.VITE_APP_UPDATE_WORKSPACE_URL;
  try {
    const request = await fetch(BaseUrl, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Data),
    });
    const response = await request.json();
    return response;
  } catch (err) {
      console.log(err);;
  }
};

export default UpdateWorkspace;
