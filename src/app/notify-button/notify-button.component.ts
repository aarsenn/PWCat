import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notify-button',
  templateUrl: './notify-button.component.html',
  styleUrls: ['./notify-button.component.css']
})
export class NotifyButtonComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

  notify() {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        const n = new Notification('MEOW!!', {
          body: 'meow meow meow',
          icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZSpXVlTTUrqDJ6its6Atl6oRfHMKK0LJwxqNTk9CH9gE9-L7HfA'
        });
      } else {
        alert('Access denied!');
      }
    });
  }
}
