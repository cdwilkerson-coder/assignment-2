# Spartan Campus Events

## Project Description

Spartan Campus Events is a two-page website that helps UNCG students find events happening on campus. The purpose of the website is to give students an easy way to view upcoming events and learn more about a featured event. The main audience for this website is UNCG students.

## Layout Decisions

I used Flexbox for the navigation menu and the related events section. Flexbox helped me control the spacing between items and allowed the items to wrap when there was not enough space.

I used CSS Grid for the upcoming event cards on the home page. I also used Grid on the featured event page to create a main content area and a sidebar for event information.

## Responsive Design

I used two media queries to make the website responsive.

- At 900px and below, the event card Grid changes to two columns and the
  event page layout changes to one column.

- At 600px and below, the event card Grid changes to one column, the
  navigation becomes vertical, and the related events stack vertically.

I tested both pages using Live Preview in VS Code and changed the browser width to make sure the layouts adjusted correctly.

## Semantic HTML

I used semantic HTML elements to organize the website.

- `header` contains the website title and navigation.
- `nav` contains the navigation links.
- `main` contains the main content of each page.
- `section` separates the different parts of the pages.
- `article` is used for individual events and event information.
- `aside` is used for the event information sidebar.
- `footer` contains information at the bottom of the page.

## Image Sources

The images used in this project came from UNC Greensboro websites.

- `campus-events.jpg` - UNC Greensboro Campus Life and Resources  
  Source: https://www.uncg.edu/campus-life-resources/groups-activities-programs/

- `career-fair.jpg` - UNC Greensboro Career and Professional Development  
  Source: https://www.uncg.edu/campus-weekly/job-fairs-for-students-part-time-full-time-internships/

- `game-night.jpg` - UNC Greensboro Esports  
  Source: https://esports.uncg.edu/uncg-gaming-and-esports-club/

## Testing

I tested both `index.html` and `event.html` using Live Preview in VS Code. I checked the navigation links, images, event cards, Grid layouts, Flexbox layouts, and responsive design. I also tested the pages at different screen widths to make sure the content remained readable.

## Reflection

While doing this project it helped me understand how Flexbox and CSS Grid can be used for different types of layouts. I also explored how media queries can change the layout depending on the size of the screen. One issue I had was getting my images to display correctly, I found out that I had not properly put them inside the images folder. I fixed this by moving the images into the correct folder and making sure the image paths in my HTML matched the file names.