FROM node:14-slim
#RUN apt-get update || : && apt-get install python -y
#ENV PYTHON /usr/bin/python3
WORKDIR /usr/src/app

COPY ./package.json ./

RUN npm install 

COPY . .

EXPOSE 3001

ENTRYPOINT [ "npm" ]

CMD ["start"]