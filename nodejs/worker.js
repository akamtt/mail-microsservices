var amqplib = require("amqplib");

const queueUserData = "send-to-queue-mail-users";

amqplib
  .connect("amqp://localhost")
  .then((conn) => {
    var ok = conn.createChannel();
    ok = ok.then((ch) => {
      console.log(
        "Beginning processment for queue send-to-queue-mail-users"
      );
      ch.assertQueue(queueUserData, {
        durable: false,
      });
      ch.consume(
        queueUserData,
        function (msg) {
          if (msg !== null) {
            try {
              console.log("message received: " + msg.content.toString());
              ch.ack(msg);
            } catch (err) {
              console.log(
                "Error with the message from the queue send-to-queue-user-data: " +
                err
              );
            }
          }
        },
        {
          noAck: false,
        }
      );

      return ch;
    });
    return ok;
  })
  .then(null, console.warn);