import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
    // Implement rate limiting logic here

    // Simply set a limit for the number of requests per IP address
    // or per user.
    try {
      const { success } = await ratelimit.limit("my-limit-key");
      // If the request is not allowed, return a 429 status code.
      
      if (!success) {
        return res.status(429).json({ error: "Too many requests" });
      }
      next();
    } catch (error) {
        console.log("Error in rate limiter", error);
        next(error);
    }
}

export default rateLimiter;