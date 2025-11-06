//* Binning (Resampling) Time Series Data

// Scenario: You have a long list of user click events.
// You need to "bin" these events into 30-minute intervals and count them to see engagement over time.

//? Input
const events = [
  { timestamp: "2025-10-22T10:01:00Z", type: "click" },
  { timestamp: "2025-10-22T10:05:00Z", type: "scroll" },
  { timestamp: "2025-10-22T10:14:00Z", type: "click" },
  { timestamp: "2025-10-22T10:31:00Z", type: "click" },
  { timestamp: "2025-10-22T10:45:00Z", type: "scroll" },
  { timestamp: "2025-10-22T11:02:00Z", type: "click" },
];

const intervale = 30 * 60 * 1000;

const binTimesTamp = (timestamp)=>{
    const binTime = new Date(timestamp);
    const time = binTime.getTime();
    const bin = Math.floor(time / intervale) * intervale
    return new Date(bin).toISOString()

}

const binnedEvents = events.reduce((bin, event)=> {
    const {timestamp} = event;
    const binTime = binTimesTamp(timestamp);
    console.log(bin , ":", event)
    if(!bin[binTime]){
        bin[binTime] ={
            total:1
        }
    }
    bin[binTime].total += 1;
    return bin
}, {})
console.log(binnedEvents)

//? Output
// binnedEvents = {
//   "2025-10-22T10:00:00.000Z": { "total": 3 },
//   "2025-10-22T10:30:00.000Z": { "total": 2 },
//   "2025-10-22T11:00:00.000Z": { "total": 1 }
// }