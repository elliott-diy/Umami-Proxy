

# Umami Analytics Proxy

This simple Cloudflare Workers proxy helps you bypass AdBlockers by serving Umami Analytics from your own custom domain. AdBlockers often block sites that use the default Umami URL, but with this proxy, you can keep your analytics running smoothly without being flagged.

Best of all, it fits neatly within Cloudflare’s free tier.


## Quick Start: One-Click Deploy 🚀

1. **Deploy the Proxy**  
   Click the button below to deploy directly to Cloudflare Workers:

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/elliott-diy/Umami-Proxy)

2. **Set Up Your Custom Domain**  
   Once deployed, go to your Cloudflare dashboard, add a custom domain or subdomain (e.g., `analytics.yourdomain.com`), and route it to the Worker you just created.

3. **Update Your Umami Script URL**  
   Replace the default Umami script URL on your website with your new custom domain:

   ```html
   <script async defer data-website-id="YOUR_WEBSITE_ID" src="https://analytics.yourdomain.com/script.js"></script>
   ```

   Now you're good to go! Umami Analytics will run smoothly without interference from AdBlockers.


## Credits
I built this project quickly to solve a personal problem and thought it could help others facing the same issue. It’s a simple solution, but I hope it makes your life a little easier!

Built with ❤️ by [Elliott](https://elliott.diy). 

## License

This project is open-source under the [MIT License](LICENSE). Feel free to use, modify, and share!
