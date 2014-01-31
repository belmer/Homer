var opts=
{ file: {
    filename: __dirname+'/buckerlog.log',
    format: ':level :time :data',
    timestamp: 'HH:mm:ss',
    accessFormat: ':time :level :method :status :url'
  },
  console: {
    color: false
  },
  syslog: {
    host: 'localhost',
    port: 514,
    facility: 18
  },
  logstash: 
  {
    redis: true, // send as redis pubsub messages
    // udp: true, // or send directly over UDP, *NOTE* you can only use one or the other, never both
    host: '216.34.250.25', // defaults to localhost
    port: 6379, // defaults to 6379 for redis, 9999 for udp
    key: 'bucker_logs', // defaults to 'bucker', this is only used for the redis transport
    channel: true, // use redis pubsub
    list: false, // use a redis list *NOTE* if channel is false, list usage is forced
    source_host: 'bacon.com' // this sets the @source_host field in logstash
  }
};

var logger = require('bucker').createLogger(opts, module),
	winston = require('winston')

winston.info('blablablah');

logger.info('informational message');
logger.debug('debug message');
logger.warn('warning');
logger.error('error');
logger.log('also works for informational messsages');
logger.module('something_else').info('and you can override the module name temporarily if you want');
logger.tags(['showing', 'off']).info('and we also support tags now');