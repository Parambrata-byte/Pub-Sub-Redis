# Simple Pub-Sub implementation in Redis with ioredis

- On forking run the commannd:
  
  ```bash
  npm install
  npm run build
  ```

- To Subscribe to a channel run the command:

    ```bash
    npm run start-sub <channel>
    ```
- To Publish to a channel run the command:

    ```bash
    npm run start-pub <channel> <message>
    ```

# Aknowledgements

- [ioredis](https://www.npmjs.com/package/ioredis)