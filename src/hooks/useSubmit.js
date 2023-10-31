import { useState } from "react";

const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (url, data) => {
    setLoading(true);
    try {
      await window.Email.send({
        SecureToken: "85c6f47d-0023-4af2-9421-ff4baae7b410",
        To: "tandorukcan@gmail.com",
        From: "tandorukcan@gmail.com",
        Subject: `You have a message from ${data.firstName}`,
        Body: `You have received the following message from ${data.email}:
        ${data.comment}`,
      });
      setResponse({
        type: "success",
        message: `Thanks for your submission ${data.firstName}, we will get back to you shortly!`,
      });
    } catch (error) {
      setResponse({
        type: "error",
        message: "Something went wrong, please try again later!",
      });
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
};

export default useSubmit;
