# Use the official Bun image
FROM oven/bun:1

# Set working directory
WORKDIR /app

# Copy application files
COPY . .

# Expose the port your app runs on (assuming default 3000)
EXPOSE 3000

# Start the application
CMD ["bun", "run", "app.ts"]
