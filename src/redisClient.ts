import { Redis } from 'ioredis';

const connect = () =>{
    const redisClient = new Redis({
        port: 6379,
        host: 'localhost'
    });

    return redisClient;
}

export default connect;