'use strict';
const consumer = require('sqs-consumer');
const producer = require('sqs-producer');

await producer.send({
  topic: 'topic-name',
  messages: [{
      key: 'key1',
      value: 'value-here',
      headers: {
          'correlation-id': 'place-id-here',
          'system-id': 'system-name'
      }
  }]
})