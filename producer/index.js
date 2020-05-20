const mqtt = require('mqtt')
const client  = mqtt.connect('mqtt://mosquitto:1883')
const periodic = require('periodic')

client.on('connect', err => {
  console.log(err)
  console.log('Producer connected to MQTT broker.')
  client.subscribe('chart', err => {
    console.log('Producer subscribed to "chart" topic.')

    if (!err) {
      periodic(1000)
        .on('tick', _ => {
          client.publish('chart', Math.random().toString())
        })
    } else {
      console.log(err)
    }
  })
})