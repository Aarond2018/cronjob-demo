
import { cronJobs } from "convex/server";
import { api, internal } from "./_generated/api";

const crons = cronJobs();

crons.interval(
  "Log to console",
  { minutes: 2 },
  internal.logs.logToConsole,
);

crons.interval(
  "Send mail",
  { hours: 5 },
  api.sendMail.sendMail
);

export default crons;