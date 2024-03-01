# https://github.com/dotnet/dotnet-docker/blob/main/samples/dotnetapp/Dockerfile
FROM --platform=$BUILDPLATFORM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG TARGETARCH

WORKDIR /source

COPY *.csproj .

RUN \
  dotnet add package Extism.runtime.all ; \
  dotnet add package Extism.Sdk

RUN dotnet restore -a $TARGETARCH

COPY Render.cs .

RUN dotnet publish -a $TARGETARCH --no-restore -o /app/render

RUN rm -f Render.cs

COPY Describe.cs .

RUN dotnet publish -a $TARGETARCH --no-restore -o /app/describe

FROM mcr.microsoft.com/dotnet/runtime:8.0

WORKDIR /app/render

COPY --from=build /app/render .

WORKDIR /app/describe

COPY --from=build /app/describe .

WORKDIR /app

USER $APP_UID