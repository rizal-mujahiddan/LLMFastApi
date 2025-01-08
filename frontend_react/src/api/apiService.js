import env from 'react-dotenv';

const apiURL = env.WEBSITE_BACKEND; // Replace port
console.log(apiURL);

export const sendMessage = async (message) => {
    try {
      const requestBody = {
        message: message
      };

      const response = await fetch(apiURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
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
  