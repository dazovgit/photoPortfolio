import { Routes } from '@angular/router';
import { Portfolio } from './portfolio/portfolio';
import { Hero } from './hero/hero';
import { Ltestimonials } from './testimonial/testimonial';
import { Contact } from './contact/contact';
import { About } from './about/about';
import { Awards } from './awards/awards';


export const routes: Routes = [
    { path: 'portfolio', component: Portfolio},
    { path: '', component: Hero},
    { path: 'customer', component:Ltestimonials},
    { path: 'contact', component: Contact},
    { path: 'about', component: About},
    { path: 'awards', component: Awards} 
];

