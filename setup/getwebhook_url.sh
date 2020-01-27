#!/usr/bin/env bash

OUTPUT="$(node getwebhook_url.js)"
# echo $OUTPUT
export WEBHOOK_PROXY_URL=$OUTPUT

# MULTILINE=$(ls \
#    -1)
# echo "${MULTILINE}"
