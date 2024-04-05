"use strict";

// import { listIPv4 } from 'modules/ipv4.js';

function getUniqueIpAddresses() {
  let array = [];
  let num = 0;
  const UniqueIpAddresses = new Set(listIPv4);
  array = [...new Set(UniqueIpAddresses)];
  return num = array.length
}

// let res = getUniqueIpAddresses(listIPv4);

// console.log('res:', res);