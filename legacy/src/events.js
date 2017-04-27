"use strict";

var Eventlist = require("./lib/eventlist.js");

function extractEventName(name) {
  return name.slice(2).toLowerCase();
};
var videoEvents = {
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

var formEvents = {
  onChange: {},
  onFocus: {},
  onBlur: {},
  onSelect: {},
  onSearch: {}
};

module.exports = Eventlist.reduce(function (ob, itm) {
  ob[itm] = {
    registered: false,
    eventName: extractEventName(itm),
    eventNS: itm,
    mediaEvent: videoEvents[itm] !== undefined,
    formEvent: formEvents[itm] !== undefined
  };
  return ob;
}, {});