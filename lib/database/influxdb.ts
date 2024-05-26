import { InfluxDB } from 'influx';

const influx = new InfluxDB({
  host: 'localhost',
  database: 'zerowastify',
  username: '',
  password: '',
  port: 8086, // Default port for InfluxDB
});

export default influx;