import { internalMutation } from "./_generated/server";

export const logToConsole = internalMutation({
  args: {},
  handler: async (ctx) => {
    const timestamp = Date.now();
    const message = `Cron job executed at ${new Date(timestamp).toLocaleString()}`;
    
    // This will appear in your Convex console
    console.log(message);   
  },
});