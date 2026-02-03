# Base image olarak Node.js 20 kullanıyoruz
FROM node:20-alpine

# Çalışma klasörünü ayarla
WORKDIR /app

# Paket dosyalarını kopyala
COPY package*.json ./

# Bağımlılıkları yükle
RUN npm install

# Proje dosyalarını kopyala
COPY . .

# Next.js uygulamasını build et
RUN npm run build

# Portu aç
EXPOSE 3000

# Uygulamayı başlat
CMD ["npm", "start"]
