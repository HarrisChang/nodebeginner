const redis = require('redis')
const client = redis.createClient({
    host: '127.0.0.1',
    port: 6379
});

client.on('error', err => {
    console.error(err)
})

client.set('harris', '20190603', redis.print)

client.get('harris', (err, data) => {
    if(err){
        console.error(err)
    }else{
        console.log(data);
    }
})

client.quit();