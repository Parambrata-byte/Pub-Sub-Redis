import connect from "./redisClient";

const redis = connect();

const main = (channel: string) => {
    redis.subscribe(channel).then((res)=>{
        redis.on('message', (channel, message) => {
            console.log(`Received message from ${channel}: ${message}`);
        });
    })
}

main(process.argv[2]);