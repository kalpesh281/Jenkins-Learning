# ------------ Stage 1: Builder ------------
    FROM node:22-alpine AS builder

    WORKDIR /app
    
    # Copy only package files and install production dependencies
    COPY package*.json ./
    RUN npm ci --only=production
    
    # Copy all source files (ignores .dockerignore files like node_modules, .env, etc.)
    COPY . .
    
    # ------------ Stage 2: Runner ------------
    FROM node:22-alpine
    
    WORKDIR /app
    
    # Copy only the built app with node_modules from builder stage
    COPY --from=builder /app /app
    
    EXPOSE 5003
    
    CMD ["npm", "start"]
    