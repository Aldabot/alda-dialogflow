Simple implementation of (Dialogflow node client) [https://github.com/googleapis/nodejs-dialogflow].

# Implementation
- add `GCLOUD_PROJECT_ID="test-231219"` to `.env` file
- add GCloud service account json file (`gcloud.json`, [https://cloud.google.com/docs/authentication/getting-started])
- `export GOOGLE_APPLICATION_CREDENTIALS="/home/user/Downloads/gcloud.json"`, which points to the previously added `gcloud.json` file

# compilation
`npm rebuild --target=8.1.0 --target_platform=linux --target_arch=x64 --target_libc=glibc --update-binary`
