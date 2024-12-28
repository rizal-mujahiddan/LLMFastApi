const apiURL = process.env.WEBSITE_BACKEND; // Replace port

export const sendMessage = async (message) => {
    try {
      const response = await fetch(apiURL, {
        method: 'GET',
        // headers: {
        //   'Content-Type': 'application/json',
        // },
        // body: JSON.stringify({ message }),
      });
  
      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }
  
      return await response.json(); 
    } catch (error) {
      console.error('Error sending message:', error,apiURL);
      throw error; 
    }
  };
  