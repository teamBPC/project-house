export default async function sendData(url: string, data: any) {
  try {
    console.log(url, data);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.log(error);
  }
  return sendData;
}
