// import { Inngest } from "inngest";

// // Create a client to send and receive events
// export const inngest = new Inngest({ id: "gocart-ecommerce" });

import { Inngest } from "inngest";

export const inngest = new Inngest({
  name: process.env.NEXT_PUBLIC_INNGEST_APP_NAME || "emart-app",
});
