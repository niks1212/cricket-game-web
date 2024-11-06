# Use an official Nginx image to serve static content
FROM nginx:alpine

# Copy the website content into the Nginx web directory
COPY app /usr/share/nginx/html

# Expose port 80 to access the app
EXPOSE 80

# Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]

