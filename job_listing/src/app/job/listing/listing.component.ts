import { Component } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent {
  public data= [
      {
        "id": 1,
        "company": "Photosnap",
        "logo": "./assets/images/photosnap.svg",
        "new": true,
        "featured": true,
        "position": "Senior Frontend Developer",
        "postedAt": "1d ago",
        "contract": "Full Time",
        "location": "USA Only",
        "tags": ['Frontend', "Senior", "HTML", "CSS", "JavaScript"]
      },
      {
        "id": 2,
        "company": "Manage",
        "logo": "./assets/images/manage.svg",
        "new": true,
        "featured": true,
        "position": "Fullstack Developer",
        "postedAt": "1d ago",
        "contract": "Part Time",
        "location": "Remote",
        "tags": ['FullStack', "Midweight", "Python", "React"]
      },
      {
        "id": 3,
        "company": "Account",
        "logo": "./assets/images/account.svg",
        "new": true,
        "featured": false,
        "position": "Junior Frontend Developer",
        "postedAt": "2d ago",
        "contract": "Part Time",
        "location": "USA Only",
        "tags": ['Frontend', "Junior", "JavaScript", "React", "CSS"]
      },

      {
        "id": 4,
        "company": "MyHome",
        "logo": "./assets/images/myhome.svg",
        "new": false,
        "featured": false,
        "position": "Junior Frontend Developer",
        "postedAt": "5d ago",
        "contract": "Contract",
        "location": "USA Only",
        "tags": ['Frontend', "Junior", "CSS", "JavaScript"]
      },
      {
        "id": 5,
        "company": "Loop Studios",
        "logo": "./assets/images/loop-studios.svg",
        "new": false,
        "featured": false,
        "position": "Software Engineer",
        "postedAt": "1w ago",
        "contract": "Full Time",
        "location": "Worldwide",
        "tags": ['FullStack', "Midweight", "JavaScript", "Ruby", "Sass"]
      },
      {
        "id": 6,
        "company": "FaceIt",
        "logo": "./assets/images/faceit.svg",
        "new": false,
        "featured": false,
        "position": "Junior Backend Developer",
        "postedAt": "2w ago",
        "contract": "Full Time",
        "location": "UK Only",
        "tags": ['BAckend', "Junior", "Ruby", "RoR"]
      },
      {
        "id": 7,
        "company": "Shortly",
        "logo": "./assets/images/shortly.svg",
        "new": false,
        "featured": false,
        "position": "Junior Developer",
        "postedAt": "2w ago",
        "contract": "Full Time",
        "location": "Worldwide",
        "tags": ['Frontend', "Junior", "HTML", "JavaScript", "Sass"]
      },
      {
        "id": 8,
        "company": "Insure",
        "logo": "./assets/images/insure.svg",
        "new": false,
        "featured": false,
        "position": "Junior Frontend Developer",
        "postedAt": "2w ago",
        "contract": "Full Time",
        "location": "USA Only",
        "tags": ['Frontend', "Junior", "JavaScript", "Vue", "Sass"]

      },
      {
        "id": 9,
        "company": "Eyecam Co.",
        "logo": "./assets/images/eyecam-co.svg",
        "new": false,
        "featured": false,
        "position": "Full Stack Engineer",
        "postedAt": "3w ago",
        "contract": "Full Time",
        "location": "Worldwide",
        "tags": ['FullStack', "Midweight", "JavaScript", "Python", "Django"]
      },
      {
        "id": 10,
        "company": "The Air Filter Company",
        "logo": "./assets/images/the-air-filter-company.svg",
        "new": false,
        "featured": false,
        "position": "Front-end Dev",
        "postedAt": "1mo ago",
        "contract": "Part Time",
        "location": "Worldwide",
        "tags": ["Frontend", "Junior", "JavaScript", "React", "Sass"]
      }
    ]
}

