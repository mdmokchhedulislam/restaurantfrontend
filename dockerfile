# Use Node.js base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source files
COPY . .

# Build Next.js app
RUN npm run build

# Expose Next.js default port
EXPOSE 3000

# Start Next.js server
CMD ["npm", "start"]






# # Build stage
# FROM node:18-alpine AS builder

# WORKDIR /app

# # Copy package.json & package-lock.json 
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy source file
# COPY . .

# # React project build
# RUN npm run build

# # Production stage: serve the build with a lightweight web server (nginx)
# FROM nginx:alpine

# # Copy build output to nginx 
# COPY --from=builder /app/public ./public
# COPY --from=builder /app/.next ./.next
# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/package.json ./package.json

# # expose port 80
# EXPOSE 80

# # Start nginx server
# CMD ["nginx", "-g", "daemon off;"]



