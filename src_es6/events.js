const Eventlist = require("./lib/eventlist.js");

function extractEventName(name) {
  return name.slice(2).toLowerCase();
};
const videoEvents = {
  onLoadedData: {},
  onLoadedMetadata: {},
  onLoadStart: {},
  onPause: {},
  onPlay: {},
  onPlaying: {},
  onProgress: {},
  onRateChange: {},
  onSeeked: {},
  onSeeking: {},
  onWaiting: {},
  onLoad: {}
};

const formEvents = {
  onChange: {},
  onFocus: {},
  onBlur: {},
  onSelect: {},
  onSearch: {}
};

module.exports = Eventlist.reduce((ob, itm) => {
  ob[itm] = {
    registered: false,
    eventName: extractEventName(itm),
    eventNS: itm,
    mediaEvent: videoEvents[itm] !== undefined,
    formEvent: formEvents[itm] !== undefined
  };
  return ob;
}, {});