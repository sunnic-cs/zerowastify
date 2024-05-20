import { ObjectId } from "mongoose";

export interface CollectionDocument {
    id : ObjectId;
    card_id : string; // Collector
    node_id : string; // smart bin objectId
    waste_level : number // percentage of bin when collected 
    timestamp : Date;
}


// Assumption : 
// Collected on 20th may at 50% will later be used to calculate the points
// 50% = 50 points maybe
// 50 points = $50