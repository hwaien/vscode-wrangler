# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.195.0/containers/javascript-node/.devcontainer/base.Dockerfile
ARG VARIANT=16-buster
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}
RUN su -c "yarn global add @cloudflare/wrangler" node
