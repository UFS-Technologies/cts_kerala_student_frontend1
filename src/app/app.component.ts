import { Component, HostListener, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Country } from './models/Country';
import { CandidateService } from './services/candidate';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ufs';

  Country: Country = new Country();
  Country_Data: Country[]

  showHeader = false;
  slideConfig = { slidesToShow: 4, slidesToScroll: 4, autoplay: !0, autoplaySpeed: 2e3, };
  slideConfig1 = { slidesToShow: 1, slidesToScroll: 1, autoplay: !0, autoplaySpeed: 2e3, };
  constructor(private CandidateService: CandidateService)
   {
   // this.Get_site_Pageload();
  }
  async Get_site_Pageload()
   {
    const response =await this.CandidateService.Get_site_Pageload();

    console.log(response);
    this.Country_Data = response[0];
    
  }
  ngOnInit() {
    AOS.init();
    this.useEffect();
  }
  useEffect() {
    let scrollRef = 0

    window.addEventListener('scroll', () => {
      // increase value up to 10, then refresh AOS
      scrollRef <= 10 ? scrollRef++ : AOS.refresh()
    });
  }

}
