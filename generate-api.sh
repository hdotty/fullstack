#!/bin/sh

MSYS_NO_PATHCONV=1 docker run --rm -v "$PWD:/local" openapitools/openapi-generator-cli generate -i /local/disz-backend/swagger/swagger.json -g javascript -o /local/disz-frontend/src/api
