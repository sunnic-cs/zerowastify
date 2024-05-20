import { ObjectId } from "mongoose";

export interface SensorsDocument {
    id : ObjectId;
    node_id : string;
    temperature : number; // dht11
    humidity : number; // dht11
    gas_concentration : number; // mq-135
    distance_level : number; // ultrasonic sensor hc-sr04
    timestamp : Date; // timestamp
}