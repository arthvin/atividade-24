const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', (err, conn) => {
    conn.createChannel((err, ch) => {
        const queue = 'tasks';
        const message = 'Hello from RabbitMQ!';

        ch.assertQueue(queue, { durable: false });
        ch.sendToQueue(queue, Buffer.from(message));

        console.log(`Message sent: ${message}`);
    });

    setTimeout(() => conn.close(), 500);
});
