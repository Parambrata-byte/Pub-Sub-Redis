import connect from "./redisClient";

const redis = connect();

const main = (channel:string,msg:string) =>{
    redis.publish(channel,msg);
}

main(process.argv[2],process.argv[3]);