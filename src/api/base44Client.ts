// Client for Web3Forms email integration
const WEB3FORMS_ACCESS_KEY = "26d9fb0c-e6f1-424a-b569-7a430d0f0833";

export const base44 = {
  integrations: {
    Core: {
      SendEmail: async ({
        to,
        subject,
        body,
        name,
        email,
      }: {
        to?: string;
        subject: string;
        body: string;
        name?: string;
        email?: string;
      }) => {
        try {
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              access_key: WEB3FORMS_ACCESS_KEY,
              name: name || "Website Visitor",
              email: email || to || "visitor@jajeh.net",
              subject: subject,
              message: body,
              from_name: name ? `${name} (jajeh.net)` : "jajeh.net Portfolio",
              botcheck: "",
            }),
          });
          const data = await response.json();
          if (data && !data.success) {
            throw new Error(data.message || "Transmission failed");
          }
          return { success: true };
        } catch (error) {
          console.error("Web3Forms transmission error:", error);
          throw error;
        }
      },
    },
  },
};

