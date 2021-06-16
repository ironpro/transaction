import Vue from 'vue'
import moment from "moment";

Vue.filter("utcTimestamp", timestamp => moment.utc(timestamp).format("MMM D YYYY"));

Vue.filter("amountFormat", value => parseFloat(Math.round(value * 100) / 100).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));