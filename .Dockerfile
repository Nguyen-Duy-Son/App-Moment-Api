# Sử dụng Node.js base image
FROM node:20

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Copy package.json và package-lock.json
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Copy toàn bộ mã nguồn vào container
COPY . .

# Expose port ứng dụng (ví dụ: 3000)
EXPOSE 3000

# Lệnh chạy ứng dụng
CMD ["npm", "start"]

