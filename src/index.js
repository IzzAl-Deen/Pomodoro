import _ from 'lodash';
import './style.css';

import { Timer } from './timer.js';
import { UI } from './ui.js';
import { playNotificationSound } from './notification.js';
import { getSettings } from './settings.js';

const { workDuration, breakDuration } = getSettings();
const timer = new Timer(workDuration, breakDuration);
const ui = new UI(timer);

ui.bind();
setInterval(() => ui.updateUI(), 1000);