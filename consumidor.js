const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', (err, conn) => {
    conn.createChannel((err, ch) => {
        const queue = 'tasks';

        ch.assertQueue(queue, { durable: false });
        console.log(`Waiting for messages in ${queue}`);

        ch.consume(queue, (msg) => {
            console.log(`Received: ${msg.content.toString()}`);
        }, { noAck: true });
    });
});
