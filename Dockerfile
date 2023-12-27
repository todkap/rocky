FROM rockylinux:9.3.20231119

RUN dnf -y  update

RUN dnf -y install nodejs

RUN echo "Node version"
RUN node --version


WORKDIR /app
COPY node/package.json package.json 
COPY node/getenv.js getenv.js
RUN npm install
EXPOSE 3000

CMD [ "node", "getenv.js"]
