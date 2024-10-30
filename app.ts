import { serve } from "bun";

const stringsArray = ["Item 1", "Item 2", "Item 3"];

serve({
  fetch(req) {
    const url = new URL(req.url);

    switch (url.pathname) {
      case "/":
        return new Response("Hello World", {
          headers: { "Content-Type": "text/plain" },
        });

      case "/json":
        return new Response(JSON.stringify({ message: "Hello, JSON!" }), {
          headers: { "Content-Type": "application/json" },
        });

      case "/jsx":
        const jsxContent = `
          <ul>
            ${stringsArray.map((item, index) => `<li key="${index}">${item}</li>`).join('')}
          </ul>
        `;

        return new Response(jsxContent, {
          headers: { "Content-Type": "text/html" },
        });

      default:
        return new Response("Not Found", { status: 404 });
    }
  },
  port: 3000, // You can change the port if needed
});
