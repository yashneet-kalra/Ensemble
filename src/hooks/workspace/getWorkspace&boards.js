const GetWorkspacesAndBoards = async (user_id, token) => {
  const data = {
    user_id,
    token,
  };
  const BaseUrl = import.meta.env.VITE_APP_GET_WORKSPACE_AND_BOARDS_URL;
  try {
    const request = await fetch(BaseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const response = await request.json();
    return response;
  } catch (err) {
    console.log(err);
  }
};

export default GetWorkspacesAndBoards;
