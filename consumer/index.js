const mqtt = require('mqtt')
const client  = mqtt.connect('mqtt://mosquitto:1883')

client.on('connect', err => {
  console.log('Consumer connected to MQTT broker.')
})

client.on("message", (topic, payload) => {
    console.log([topic, payload].join(": "))
    // client.end()
})

client.subscribe('chart', err => {
    console.log('Consumer subscribed to "chart" topic.')
})

