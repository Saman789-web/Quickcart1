import { serve } from "inngest/next";
import { syncUserCreation,syncUserUpdation,syncUserDeletion } from "@/config/inngest/functions";



export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    syncUserCreation,
   syncUserDeletion,
   syncUserUpdation
  ],
});