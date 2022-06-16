import { Component, OnInit } from '@angular/core';
import { apiKeyConfig } from 'src/environments/environment';
import { EventService } from '../event.service';
import { Event } from '../models/Event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  WeatherData: any;
  data: any;

  weatherApiKey = apiKeyConfig.weatherApiKey;

  ngOnInit() {
    this.WeatherData = {
      main: {},
      isDay: true
    };
    this.getWeatherData();

    this.eventService.fetchEvents().subscribe(events => {
      this.events = events;
    })
  }

  getWeatherData() {
    fetch(this.weatherApiKey)
      .then(response => response.json())
      .then(data => { this.setWeatherData(data); })
  }

  setWeatherData(data:any) {
    this.WeatherData = data;
    let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData.temp = (this.WeatherData.main.temp).toFixed(0);
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max).toFixed(0);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like).toFixed(0);
  }

  events: Event[] = [];

  constructor(private eventService: EventService) { }
}
