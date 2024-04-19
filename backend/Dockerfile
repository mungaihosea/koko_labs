FROM python:3.11

ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1

COPY ./requirements.txt /requirements.txt


# RUN pip install ruamel.yaml==0.17.21 ruamel.yaml.clib==0.2.6
RUN pip install -r /requirements.txt

WORKDIR /app

COPY ./ ./
