import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class Portfolio {
  constructor(private sanitizer: DomSanitizer) {}

  themes = [
    {
      id: 0,
      name: 'All',
      description: 'View all photography collections.',
      photos: [
        // Nature photos
        { url: 'images/nature/1.jpg', title: 'Morning Mist at Lake Louise', location: 'Banff National Park, Canada' },
        { url: 'images/nature/2.jpg', title: 'Alpine Peaks at Sunrise', location: 'Swiss Alps, Switzerland' },
        { url: 'images/nature/3.jpg', title: 'Half Dome Reflection', location: 'Yosemite National Park, USA' },
        { url: 'images/nature/4.jpg', title: 'Cuernos del Paine', location: 'Torres del Paine, Chile' },
        { url: 'images/nature/5.jpg', title: 'Aurora Dancing Over Fjords', location: 'Lofoten Islands, Norway' },
        { url: 'images/nature/6.jpg', title: 'Desert Sunset at Uluru', location: 'Northern Territory, Australia' },
        { url: 'images/nature/7.jpg', title: 'Cherry Blossoms at Mount Fuji', location: 'Honshu, Japan' },
        { url: 'images/nature/8.jpg', title: 'Milky Way Over Atacama', location: 'Atacama Desert, Chile' },
        { url: 'images/nature/9.jpg', title: 'Emerald Crater Lake', location: 'Tongariro National Park, New Zealand' },
        { url: 'images/nature/10.jpg', title: 'Ancient Redwood Giants', location: 'Sequoia National Park, California' },      
        // Wedding photos
        { url: 'images/wedding/1.jpg', title: 'Sunset Ceremony at Oia', location: 'Santorini, Greece' },
        { url: 'images/wedding/2.jpg', title: 'Vineyard Romance', location: 'Tuscany, Italy' },
        { url: 'images/wedding/3.jpg', title: 'Golden Hour Vows', location: 'Napa Valley, USA' },
        { url: 'images/wedding/4.jpg', title: 'Tropical Paradise Wedding', location: 'Bali, Indonesia' },
        { url: 'images/wedding/5.jpg', title: 'Castle Fairytale Wedding', location: 'Loire Valley, France' },
        { url: 'images/wedding/6.jpg', title: 'Beach Wedding at Sunset', location: 'Maldives' },
        { url: 'images/wedding/7.jpg', title: 'Mountain Peak Ceremony', location: 'Aspen, Colorado' },
        { url: 'images/wedding/8.jpg', title: 'Garden Party Wedding', location: 'Cotswolds, England' },
        { url: 'images/wedding/9.jpg', title: 'Desert Oasis Celebration', location: 'Marrakech, Morocco' },
        { url: 'images/wedding/10.jpg', title: 'Lakeside Romance', location: 'Lake Como, Italy' },
        { url: 'images/wedding/11.jpg', title: 'City Skyline Wedding', location: 'New York, USA' },
        // Portrait photos
        { url: 'images/portrait/1.jpg', title: 'Parisian Artist at Montmartre', location: 'Paris, France' },
        { url: 'images/portrait/2.jpg', title: 'Geisha in Traditional Kimono', location: 'Tokyo, Japan' },
        { url: 'images/portrait/3.jpg', title: 'Broadway Performer', location: 'New York, USA' },
        { url: 'images/portrait/4.jpg', title: 'Craftsman at Grand Bazaar', location: 'Istanbul, Turkey' },
        { url: 'images/portrait/5.jpg', title: 'Flamenco Dancer in Seville', location: 'Andalusia, Spain' },
        { url: 'images/portrait/6.jpg', title: 'Masai Warrior Portrait', location: 'Serengeti, Tanzania' },
        { url: 'images/portrait/7.jpg', title: 'Street Musician with Violin', location: 'Prague, Czech Republic' },
        { url: 'images/portrait/8.jpg', title: 'Tibetan Monk in Meditation', location: 'Lhasa, Tibet' },
        { url: 'images/portrait/9.jpg', title: 'Venetian Mask Artisan', location: 'Venice, Italy' },
        // Event photos
        { url: 'images/event/1.jpg', title: 'Royal Wedding Celebration', location: 'London, England' },
        { url: 'images/event/2.jpg', title: 'Berlin Film Festival Premiere', location: 'Berlin, Germany' },
        { url: 'images/event/3.jpg', title: 'Flamenco Festival Night', location: 'Barcelona, Spain' },
        { url: 'images/event/4.jpg', title: 'Opera House Gala', location: 'Sydney, Australia' },
        { url: 'images/event/5.jpg', title: 'Fashion Week Runway', location: 'Milan, Italy' },
        { url: 'images/event/6.jpg', title: 'Music Festival Main Stage', location: 'Coachella, California' },
        { url: 'images/event/7.jpg', title: 'Art Gallery Opening Night', location: 'Louvre, Paris' },
        { url: 'images/event/8.jpg', title: 'Corporate Award Ceremony', location: 'Dubai, UAE' },
        { url: 'images/event/9.jpg', title: 'Cultural Heritage Festival', location: 'Kyoto, Japan' },
        { url: 'images/event/10.jpg', title: 'Charity Gala Dinner', location: 'Monaco, Monaco' },
        { url: 'images/event/11.jpg', title: 'Technology Conference', location: 'Silicon Valley, USA' },
        // Street photos
        { url: 'images/street/1.jpg', title: 'Mumbai Monsoon Rush', location: 'Mumbai, India' },
        { url: 'images/street/2.jpg', title: 'Neon Nights in Central', location: 'Hong Kong, China' },
        { url: 'images/street/3.jpg', title: 'Graffiti Alley Stories', location: 'São Paulo, Brazil' },
        { url: 'images/street/4.jpg', title: 'Khan el-Khalili Market', location: 'Cairo, Egypt' },
        { url: 'images/street/5.jpg', title: 'Bicycle Culture', location: 'Amsterdam, Netherlands' },
        { url: 'images/street/6.jpg', title: 'Medieval Cobblestones', location: 'Prague, Czech Republic' },
        { url: 'images/street/7.jpg', title: 'Floating Market Dawn', location: 'Bangkok, Thailand' },
        { url: 'images/street/8.jpg', title: 'Day of the Dead Celebration', location: 'Mexico City, Mexico' },
        { url: 'images/street/9.jpg', title: 'Vienna Coffee House Culture', location: 'Vienna, Austria' },
        { url: 'images/street/10.jpg', title: 'Gangnam District Energy', location: 'Seoul, South Korea' },
        { url: 'images/street/11.jpg', title: 'Nordic Minimalism', location: 'Copenhagen, Denmark' },
        // Black & White photos
        { url: 'images/black&white/1.jpg', title: 'Jazz Club Shadows', location: 'Chicago, USA' },
        { url: 'images/black&white/2.jpg', title: 'Gondolier at Dawn', location: 'Venice, Italy' },
        { url: 'images/black&white/3.jpg', title: 'Zen Garden Meditation', location: 'Kyoto, Japan' },
        { url: 'images/black&white/4.jpg', title: 'Medina Merchant', location: 'Marrakech, Morocco' },
        { url: 'images/black&white/5.jpg', title: 'Highland Bagpiper', location: 'Edinburgh, Scotland' },
        { url: 'images/black&white/6.jpg', title: 'Northern Lights Silhouette', location: 'Reykjavik, Iceland' }
      ]
    },
    {
     id:1,
     name: 'Wedding',
     description: 'Capturing the love and joy of weddings with stunning photography.',
     photos: [
        { url: 'images/wedding/1.jpg', title: 'Sunset Ceremony at Oia', location: 'Santorini, Greece' },
        { url: 'images/wedding/2.jpg', title: 'Vineyard Romance', location: 'Tuscany, Italy' },
        { url: 'images/wedding/3.jpg', title: 'Golden Hour Vows', location: 'Napa Valley, USA' },
        { url: 'images/wedding/4.jpg', title: 'Tropical Paradise Wedding', location: 'Bali, Indonesia' },
        { url: 'images/wedding/5.jpg', title: 'Castle Fairytale Wedding', location: 'Loire Valley, France' },
        { url: 'images/wedding/6.jpg', title: 'Beach Wedding at Sunset', location: 'Maldives' },
        { url: 'images/wedding/7.jpg', title: 'Mountain Peak Ceremony', location: 'Aspen, Colorado' },
        { url: 'images/wedding/8.jpg', title: 'Garden Party Wedding', location: 'Cotswolds, England' },
        { url: 'images/wedding/9.jpg', title: 'Desert Oasis Celebration', location: 'Marrakech, Morocco' },
        { url: 'images/wedding/10.jpg', title: 'Lakeside Romance', location: 'Lake Como, Italy' },
        { url: 'images/wedding/11.jpg', title: 'City Skyline Wedding', location: 'New York, USA' }
      ]
    },
    {
      id:2,
      name: 'Nature & Landscape',
      description: 'Exploring the beauty of nature through the lens.',
      photos: [
        { url: 'images/nature/1.jpg', title: 'Morning Mist at Lake Louise', location: 'Banff National Park, Canada' },
        { url: 'images/nature/2.jpg', title: 'Alpine Peaks at Sunrise', location: 'Swiss Alps, Switzerland' },
        { url: 'images/nature/3.jpg', title: 'Half Dome Reflection', location: 'Yosemite National Park, USA' },
        { url: 'images/nature/4.jpg', title: 'Cuernos del Paine', location: 'Torres del Paine, Chile' },
        { url: 'images/nature/5.jpg', title: 'Aurora Dancing Over Fjords', location: 'Lofoten Islands, Norway' },
        { url: 'images/nature/6.jpg', title: 'Desert Sunset at Uluru', location: 'Northern Territory, Australia' },
        { url: 'images/nature/7.jpg', title: 'Cherry Blossoms at Mount Fuji', location: 'Honshu, Japan' },
        { url: 'images/nature/8.jpg', title: 'Milky Way Over Atacama', location: 'Atacama Desert, Chile' },
        { url: 'images/nature/9.jpg', title: 'Emerald Crater Lake', location: 'Tongariro National Park, New Zealand' },
        { url: 'images/nature/10.jpg', title: 'Ancient Redwood Giants', location: 'Sequoia National Park, California' }
      ]    },
    {
      id:3,
      name: 'Portrait',
      description: 'Capturing the essence of individuals through portraits.',
      photos: [
        { url: 'images/portrait/1.jpg', title: 'Parisian Artist at Montmartre', location: 'Paris, France' },
        { url: 'images/portrait/2.jpg', title: 'Geisha in Traditional Kimono', location: 'Tokyo, Japan' },
        { url: 'images/portrait/3.jpg', title: 'Broadway Performer', location: 'New York, USA' },
        { url: 'images/portrait/4.jpg', title: 'Craftsman at Grand Bazaar', location: 'Istanbul, Turkey' },
        { url: 'images/portrait/5.jpg', title: 'Flamenco Dancer in Seville', location: 'Andalusia, Spain' },
        { url: 'images/portrait/6.jpg', title: 'Masai Warrior Portrait', location: 'Serengeti, Tanzania' },
        { url: 'images/portrait/7.jpg', title: 'Street Musician with Violin', location: 'Prague, Czech Republic' },
        { url: 'images/portrait/8.jpg', title: 'Tibetan Monk in Meditation', location: 'Lhasa, Tibet' },
        { url: 'images/portrait/9.jpg', title: 'Venetian Mask Artisan', location: 'Venice, Italy' }
      ]
    },
    {
      id:4,
      name: 'Events',
      description: 'Documenting special events with professional photography.',
      photos: [
        { url: 'images/event/1.jpg', title: 'Royal Wedding Celebration', location: 'London, England' },
        { url: 'images/event/2.jpg', title: 'Berlin Film Festival Premiere', location: 'Berlin, Germany' },
        { url: 'images/event/3.jpg', title: 'Flamenco Festival Night', location: 'Barcelona, Spain' },
        { url: 'images/event/4.jpg', title: 'Opera House Gala', location: 'Sydney, Australia' },
        { url: 'images/event/5.jpg', title: 'Fashion Week Runway', location: 'Milan, Italy' },
        { url: 'images/event/6.jpg', title: 'Music Festival Main Stage', location: 'Coachella, California' },
        { url: 'images/event/7.jpg', title: 'Art Gallery Opening Night', location: 'Louvre, Paris' },
        { url: 'images/event/8.jpg', title: 'Corporate Award Ceremony', location: 'Dubai, UAE' },
        { url: 'images/event/9.jpg', title: 'Cultural Heritage Festival', location: 'Kyoto, Japan' },
        { url: 'images/event/10.jpg', title: 'Charity Gala Dinner', location: 'Monaco, Monaco' },
        { url: 'images/event/11.jpg', title: 'Technology Conference', location: 'Silicon Valley, USA' }
      ] 
    },
    {
      id:5,
      name: 'Street',
      description: 'Street photography captures the essence of urban life.',
      photos: [
        { url: 'images/street/1.jpg', title: 'Mumbai Monsoon Rush', location: 'Mumbai, India' },
        { url: 'images/street/2.jpg', title: 'Neon Nights in Central', location: 'Hong Kong, China' },
        { url: 'images/street/3.jpg', title: 'Graffiti Alley Stories', location: 'São Paulo, Brazil' },
        { url: 'images/street/4.jpg', title: 'Khan el-Khalili Market', location: 'Cairo, Egypt' },
        { url: 'images/street/5.jpg', title: 'Bicycle Culture', location: 'Amsterdam, Netherlands' },
        { url: 'images/street/6.jpg', title: 'Medieval Cobblestones', location: 'Prague, Czech Republic' },
        { url: 'images/street/7.jpg', title: 'Floating Market Dawn', location: 'Bangkok, Thailand' },
        { url: 'images/street/8.jpg', title: 'Day of the Dead Celebration', location: 'Mexico City, Mexico' },
        { url: 'images/street/9.jpg', title: 'Vienna Coffee House Culture', location: 'Vienna, Austria' },
        { url: 'images/street/10.jpg', title: 'Gangnam District Energy', location: 'Seoul, South Korea' },
        { url: 'images/street/11.jpg', title: 'Nordic Minimalism', location: 'Copenhagen, Denmark' }
      ]
    },
    {
      id:6,
      name: 'Black & White',
      description: 'Timeless black and white photography capturing emotions and contrasts.',
      photos: [
        { url: 'images/black&white/1.jpg', title: 'Jazz Club Shadows', location: 'Chicago, USA' },
        { url: 'images/black&white/2.jpg', title: 'Gondolier at Dawn', location: 'Venice, Italy' },
        { url: 'images/black&white/3.jpg', title: 'Zen Garden Meditation', location: 'Kyoto, Japan' },
        { url: 'images/black&white/4.jpg', title: 'Medina Merchant', location: 'Marrakech, Morocco' },
        { url: 'images/black&white/5.jpg', title: 'Highland Bagpiper', location: 'Edinburgh, Scotland' },
        { url: 'images/black&white/6.jpg', title: 'Northern Lights Silhouette', location: 'Reykjavik, Iceland' }
      ] 
    }
  ];

  selectedTheme: any = this.themes[0]; // "All" theme automatically selected
  selectedPhoto: any = null;
  isModalOpen: boolean = false;

  selectTheme(theme: any) {
    this.selectedTheme = theme;
  }

  openPhotoModal(photo: any) {
    this.selectedPhoto = photo;
    this.isModalOpen = true;
  }

  closePhotoModal() {
    this.selectedPhoto = null;
    this.isModalOpen = false;
  }

  navigateToNextPhoto() {
    const currentPhotos = this.selectedTheme.photos;
    const currentIndex = currentPhotos.findIndex((photo: any) => photo.url === this.selectedPhoto.url);
    
    if (currentIndex < currentPhotos.length - 1) {
      this.selectedPhoto = currentPhotos[currentIndex + 1];
    } else {
      // Loop to the first photo
      this.selectedPhoto = currentPhotos[0];
    }
  }

  navigateToPreviousPhoto() {
    const currentPhotos = this.selectedTheme.photos;
    const currentIndex = currentPhotos.findIndex((photo: any) => photo.url === this.selectedPhoto.url);
    
    if (currentIndex > 0) {
      this.selectedPhoto = currentPhotos[currentIndex - 1];
    } else {
      // Loop to the last photo
      this.selectedPhoto = currentPhotos[currentPhotos.length - 1];
    }
  }

  canNavigateNext(): boolean {
    return this.selectedTheme && this.selectedTheme.photos && this.selectedTheme.photos.length > 1;
  }

  canNavigatePrevious(): boolean {
    return this.selectedTheme && this.selectedTheme.photos && this.selectedTheme.photos.length > 1;
  }

  getGoogleMapsUrl(location: string): string {
    const encodedLocation = encodeURIComponent(location);
    return `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodedLocation}`;
  }

  getGoogleMapsSearchUrl(location: string): string {
    const encodedLocation = encodeURIComponent(location);
    return `https://www.google.com/maps/search/${encodedLocation}`;
  }

  getGoogleMapsEmbedUrl(location: string): SafeResourceUrl {
    const encodedLocation = encodeURIComponent(location);
    const url = `https://www.google.com/maps?q=${encodedLocation}&output=embed`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  /*smooth loading*/ 
  onImageLoad(event: Event): void {
    const img = event.target as HTMLImageElement;
    const wrapper = img.parentElement;
    if (wrapper) {
      img.classList.add('loaded');
      const loader = wrapper.querySelector('.image-loader');
      if (loader) {
        loader.classList.add('hidden');
      }
    }
  }

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    const wrapper = img.parentElement;
    if (wrapper) {
      img.classList.add('error');
      const loader = wrapper.querySelector('.image-loader');
      if (loader) {
        loader.classList.add('hidden');
      }
    }
  }
}
