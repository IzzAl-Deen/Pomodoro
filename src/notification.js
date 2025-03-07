let audio;
import Notif from './assets/alert.mp3';

export function playNotificationSound() {
    audio = new Audio(Notif);
    audio.play();
}