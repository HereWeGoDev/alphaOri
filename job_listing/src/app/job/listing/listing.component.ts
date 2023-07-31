import { Component } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent 
{filters:string[]=[];

  
    public data= [
        {
          "id": 1,
          "company": "Photosnap",
          "logo": "./assets/images/photosnap.svg",
          "new": true,
          "featured": true,
          "position": "Senior Frontend Developer",
          //"role": "Frontend",
          //"level": "Senior",
          "postedAt": "1d ago",
          "contract": "Full Time",
          "location": "USA Only",
          //"languages": ["HTML", "CSS", "JavaScript"],
          //"tools": [],
          "tags" : ["Frontend", "Senior" , "HTML", "CSS", "JavaScript" ]
        },
        {
          "id": 2,
          "company": "Manage",
          "logo": "./assets/images/manage.svg",
          "new": true,
          "featured": true,
          "position": "Fullstack Developer",
         // "role": "Fullstack",
         // "level": "Midweight",
          "postedAt": "1d ago",
          "contract": "Part Time",
          "location": "Remote",
          //"languages": ["Python"],
          //"tools": ["React"],
          "tags" : ["Fullstack","Midweight","Python","React"]
        },
        {
          "id": 3,
          "company": "Account",
          "logo": "./assets/images/account.svg",
          "new": true,
          "featured": false,
          "position": "Junior Frontend Developer",
          //"role": "Frontend",
          //"level": "Junior",
          "postedAt": "2d ago",
          "contract": "Part Time",
          "location": "USA Only",
          //"languages": ["JavaScript"],
          //"tools": ["React", " Sass"]
          tags:["Frontend","Junior","JavaScript","React", " Sass"]
        },
        {
          "id": 4,
          "company": "MyHome",
          "logo": "./assets/images/myhome.svg",
          "new": false,
          "featured": false,
          "position": "Junior Frontend Developer",
          //"role": "Frontend",
          //"level": "Junior",
          "postedAt": "5d ago",
          "contract": "Contract",
          "location": "USA Only",
         // "languages": ["CSS", "JavaScript"],
          //"tools": []
          "tags":["Frontend","Junior","CSS", "JavaScript"]
        },
        {
          "id": 5,
          "company": "Loop Studios",
          "logo": "./assets/images/loop-studios.svg",
          "new": false,
          "featured": false,
          "position": "Software Engineer",
          //"role": "Fullstack",
          //"level": "Midweight",
          "postedAt": "1w ago",
          "contract": "Full Time",
          "location": "Worldwide",
          //"languages": ["JavaScript"],
          //"tools": ["Ruby", "Sass"]
          tags: ["Fullstack","Midweight","JavaScript","Ruby", "Sass"]
        },
        {
          "id": 6,
          "company": "FaceIt",
          "logo": "./assets/images/faceit.svg",
          "new": false,
          "featured": false,
          "position": "Junior Backend Developer",
          //"role": "Backend",
          //"level": "Junior",
          "postedAt": "2w ago",
          "contract": "Full Time",
          "location": "UK Only",
          //"languages": ["Ruby"],
          //"tools": ["RoR"]
          "tags" :["Backend","Junior","Ruby","RoR"]
        },
        {
          "id": 7,
          "company": "Shortly",
          "logo": "./assets/images/shortly.svg",
          "new": false,
          "featured": false,
          "position": "Junior Developer",
          //"role": "Frontend",
          //"level": "Junior",
          "postedAt": "2w ago",
          "contract": "Full Time",
          "location": "Worldwide",
          //"languages": ["HTML", "JavaScript"],
          //"tools": ["Sass"]
          "tags":["Frontend","Junior","HTML", "JavaScript","Sass"]
        },
        {
          "id": 8,
          "company": "Insure",
          "logo": "./assets/images/insure.svg",
          "new": false,
          "featured": false,
          "position": "Junior Frontend Developer",
          //"role": "Frontend",
          //"level": "Junior",
          "postedAt": "2w ago",
          "contract": "Full Time",
          "location": "USA Only",
          //"languages": ["JavaScript"],
          //"tools": ["Vue", "Sass"]
          "tags":["Frontend","Junior", "JavaScript","Vue","Sass"]
        },
        {
          "id": 9,
          "company": "Eyecam Co.",
          "logo": "./assets/images/eyecam-co.svg",
          "new": false,
          "featured": false,
          "position": "Full Stack Engineer",
          //"role": "Fullstack",
          //"level": "Midweight",
          "postedAt": "3w ago",
          "contract": "Full Time",
          "location": "Worldwide",
          //"languages": ["JavaScript", "Python"],
          //"tools": ["Django"]
          "tags":["Fullstack","Midweight", "JavaScript","Python","Django"]
        },
        {
          "id": 10,
          "company": "The Air Filter Company",
          "logo": "./assets/images/the-air-filter-company.svg",
          "new": false,
          "featured": false,
          "position": "Front-end Dev",
         // "role": "Frontend",
          //"level": "Junior",
          "postedAt": "1mo ago",
          "contract": "Part Time",
          "location": "Worldwide",
         // "languages": ["JavaScript"],
         // "tools": ["React", "Sass"]
         tags:["Frontend","Junior", "JavaScript","React","Sass"]
        }
      ];
     
 filteredData:{
    id: number;
    company: string;
    logo: string;
    new: boolean;
    featured: boolean;
    position: string;
    //role: string;
    //level: string;
    postedAt: string;
    contract: string;
    location: string;
    //languages: string[];
    //tools: string[];
    tags: string[];
  }[]=[];

  

ngOnInit(){
this.applyFilter();
}

addToFilter(tag:string){
  if(!this.filters.includes(tag)){
    this.filters.push(tag);
  }
  console.log(this.filters);
  this.applyFilter();
}

applyFilter(){
  this.filteredData = this.data.filter((job) => {
    const tags = job.tags;
  // const tagsRole =job.role;
    //const tagsLanguages = job.languages;
    if(!this.filters.length)
    {
      return true;
    }
    return this.filters.every((filter) =>{return tags.includes(filter);})
  }) 
  console.log(this.filteredData)
}


removeFilter(filter: string){
  const index = this.filters.indexOf(filter);
    if (index >= 0){
      this.filters.splice(index,1);
    }

  console.log(this.filters);
  this.applyFilter();
  }
}//full doc end

/* updateFilteredData() {
  const filteredData = this.data.filter((job) => {
    const hasSelectedLanguage = this.selectedLanguages.length === 0 || this.selectedLanguages.some(lang => job.languages.includes(lang));
    const hasSelectedRole = this.selectedRoles.length === 0 || this.selectedRoles.includes(role);
    const hasSelectedTool = this.selectedTools.length === 0 || this.selectedTools.some(tool => job.tools.includes(tool));
    return hasSelectedLanguage && hasSelectedRole && hasSelectedTool;
  });
}*/

