FROM cypress/included:13.17.0

WORKDIR /e2e

COPY package*.json ./
RUN npm ci

COPY . .

ENTRYPOINT ["cypress", "run"]
