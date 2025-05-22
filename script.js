const projects = [
    {
      title: "Repurposing Phoenix Offices to Industrial and Apartments",
      description: "An interactive story map showing Phoenix offices being converted.",
      image: "images/office_conversion.png",
      link: "https://atlas.colliers.com/portal/apps/storymaps/stories/fa47e7901b4a42acbe40919e36fec81c"
    },
    {
      title: "Broker Case Study",
      description: "A dashboard visualizing trend analysis for broker.",
      image: "images/case_study.png",
      link: "https://atlas.colliers.com/portal/apps/dashboards/bbb99adbdfcc4537b080f148f1f937c9"
    },
    {
    title: "Employees Living Farther Away Signals Office Market Recovery Challenge",
    image: "images/dot.gif",
    link: "https://www.costar.com/article/183709170/employees-living-farther-away-signals-office-market-recovery-challenge"
  },
  {
    title: "The Sweet 16 of US Retail Markets Square Off",
    image: "images/sweet16.gif",
    link: "https://www.costar.com/article/1699284720/the-sweet-16-of-us-retail-markets-square-off"
  },
  {
    title: "Ski-Adjacent Real Estate Feels the Heat from Canada’s Rough Year of Forest Fires",
    image: "images/Can_fire.gif",
    link: "https://www.costar.com/article/351289022/ski-adjacent-real-estate-feels-the-heat-from-canadas-rough-year-of-forest-fires"
  },
  {
    title: "Pickleball Craze Sweeps America Demand Soars as Public Courts Struggle to Keep Up",
    image: "images/pickle.png",
    link: "https://www.costar.com/article/527760433/pickleball-craze-sweeps-america-demand-soars-as-public-courts-struggle-to-keep-up"
  },
  {
    title: "New York Subway and London Underground Stage a Comeback Slowly",
    image: "images/subway.png",
    link: "https://www.costar.com/article/199367457/new-york-subway-and-london-underground-stage-a-comeback-slowly"
  },
  {
    title: "EV Battery Visualization",
    image: "images/mapbox_EV.gif",
    link: "https://nicoshih.github.io/EV_battery/"
  },
  {
    title: "Regional Dutch Bros Coffee Chain Brews Up National Expansion",
    image: "images/dutch.png",
    link: "https://www.costar.com/article/478265115/regional-dutch-bros-coffee-chain-brews-up-national-expansion"
  },
  {
    title: "Severe Weather Expected to Make Commercial Property Insurance More Costly",
    image: "images/fire.png",
    link: "https://www.costar.com/article/1436720963/severe-weather-expected-to-make-commercial-property-insurance-more-costly-harder-to-find"
  },
  {
    title: "Hawaii Wildfires Rip Through Heart of Maui’s Commercial District",
    image: "images/maui.png",
    link: "https://www.costar.com/article/1484428056/hawaii-wildfires-rip-through-heart-of-mauis-commercial-district-killing-dozens-destroying-property"
  },
  {
    title: "Here is What Separated Winners From Losers in the 2023 Office Market",
    image: "images/office_sales.png",
    link: "https://www.costar.com/article/725429132/here-is-what-separated-winners-from-losers-in-the-2023-office-market"
  },
  {
    title: "Best Places to Retire Pennsylvania Dominates New Ranking",
    image: "images/fl.png",
    link: "https://www.costar.com/article/1035547232/best-places-to-retire-pennsylvania-dominates-new-ranking-as-florida-markets-drop"
  },
  {
    title: "Warehouse Opposition Hardens in New Jersey",
    image: "images/FukHuaaaAAMoTWl.png",
    link: "https://www.costar.com/article/156658731/warehouse-opposition-hardens-in-new-jersey-against-proposed-megaprojects"
  },
  {
    title: "The World Cup of Property - Chart 1",
    image: "images/soccer1.png",
    link: "https://www.costar.com/article/279444222/the-world-cup-of-property-china-and-us-dominate-but-uk-beats-us-in-final"
  },
  {
    title: "The World Cup of Property - Chart 2",
    image: "images/soccer2.png",
    link: "https://www.costar.com/article/279444222/the-world-cup-of-property-china-and-us-dominate-but-uk-beats-us-in-final"
  },
  {
    title: "Workplace Survey Finds Three-Day Office Schedules Reign",
    image: "images/wfh.png",
    link: "https://www.costar.com/article/1493751318/workplace-survey-finds-three-day-office-schedules-reign-as-hybrid-option"
  },
  {
    title: "More Than 16,000 NYC Hotel Rooms Used to Accommodate Unhoused Migrants",
    image: "images/hotelmap.png",
    link: "https://www.costar.com/article/1900939477/more-than-16000-nyc-hotel-rooms-used-to-accommodate-unhoused-migrants"
  },
  {
    title: "Federal Government Awards Billions in Grants for Passenger Rail Projects",
    image: "images/railmap.png",
    link: "https://www.costar.com/article/2079666152/federal-government-awards-billions-of-dollars-in-grants-for-passenger-rail-projects-nationwide"
  },
  {
    title: "Real Estate Stocks Improve but Offer Negative Return in First Five Months of 2023",
    image: "images/heatmap.png",
    link: "https://www.costar.com/article/864604261/real-estate-stocks-improve-but-offer-negative-return-in-first-five-months-of-2023"
  },
  {
    title: "Job Openings Increase for US Trade Sector and Financial Services",
    image: "images/job_open.png",
    link: "https://www.costar.com/article/2029752861/job-openings-increase-for-us-trade-sector-and-financial-services"
  },
  {
    title: "Houston Makes Biggest Jump on List of Top 20 Cities",
    image: "images/slope.png",
    link: "https://www.costar.com/article/1312928831/houston-makes-biggest-jump-on-list-of-top-20-cities-where-people-are-moving"
  },
  {
    title: "Suburban Apartment Rents Continue to Rise With Population Surge",
    image: "images/rent.png",
    link: "https://www.costar.com/article/1685179504/suburban-apartment-rents-continue-to-rise-with-population-surge"
  },
  {
    title: "Los Angeles Skyscraper, Unfinished and for Sale, Draws Potential Buyers — and New Ideas",
    image: "images/3dmap.png",
    link: "https://www.costar.com/article/2030217368/los-angeles-skyscraper-unfinished-and-for-sale-draws-potential-buyers-%E2%80%94-and-new-ideas?utm_campaign=news&utm_content=https://www.costar.com/ar&utm_medium=social&utm_source=twitter&utm_term=news"
  },
  {
    title: "The Most Popular Grocery Store in Each State",
    image: "images/grocery.png",
    link: "https://www.costar.com/article/1639321228/the-most-popular-grocery-store-in-each-state"
  },
  {
    title: "Younger Households Propel Surge in US Homeownership",
    image: "images/young_rent.png",
    link: "https://www.costar.com/article/1929064364/younger-households-propel-surge-in-us-homeownership"
  },
  {
    title: "US Residents Flocking to Florida Send Rent and Home Prices Soaring",
    image: "images/rent_soar.png",
    link: "https://www.costar.com/article/384748660/us-residents-flocking-to-florida-send-rent-and-home-prices-soaring"
  },
  {
    title: "US Industrial Production Rebounds",
    image: "images/grid_bar.png",
    link: "https://www.costar.com/article/1929375453/us-industrial-production-rebounds"
  },
  {
    title: "New York Developer Gambles on Las Vegas Shift Toward Strip-Facing Stores",
    image: "images/vegas.png",
    link: "https://www.costar.com/article/37004062/new-york-developer-gambles-on-las-vegas-shift-toward-strip-facing-stores?utm_campaign=news&utm_content=https://www.costar.com/ar&utm_medium=social&utm_source=twitter&utm_term=news"
  },
  {
    title: "Americans Don't Plan to Slash Holiday Spending, JLL Survey Says",
    image: "images/dot.jpeg",
    link: "https://www.costar.com/article/1706469286/americans-dont-plan-to-slash-holiday-spending-jll-survey-says"
  },
  {
    title: "This Property Executive Looks To Turn Recreational Vehicle Demand Into REIT Storage Powerhouse",
    image: "images/rv.png",
    link: "https://www.costar.com/article/1749472735/this-property-executive-looks-to-turn-recreational-vehicle-demand-into-reit-storage-powerhouse?utm_campaign=news&utm_content=Gary+Wojtaszek+came+out+o&utm_medium=social&utm_source=twitter&utm_term=news"
  },
  {
    title: "Property Insurance Costs Surge",
    image: "images/grid_scatter.png",
    link: "https://www.costar.com/article/569681224/property-insurance-costs-surge"
  }
    // Add more projects as needed
  ];
  
  const projectsContainer = document.querySelector('.projects');
  
  // Pagination Variables
const projectsPerPage = 9;
let currentPage = 1;

// Function to display projects
function displayProjects() {
  // Step 1: fade out the container
  projectsContainer.classList.remove('fade-in'); // reset first
  projectsContainer.classList.add('fade-out');

  setTimeout(() => {
    // Step 2: Clear and refill the container
    projectsContainer.innerHTML = '';

    const startIndex = (currentPage - 1) * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    const projectsToShow = projects.slice(startIndex, endIndex);

    projectsToShow.forEach(project => {
      const card = document.createElement('div');
      card.classList.add('project-card');

      card.innerHTML = `
        <div class="thumbnail-wrapper">
          <img src="${project.image}" alt="${project.title}">
          <div class="overlay">
            <span>View Interactive</span>
          </div>
        </div>
        <div class="content">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <a href="${project.link}" target="_blank">View Project</a>
        </div>
      `;

      projectsContainer.appendChild(card);
    });

    updatePaginationButtons();

    // Step 3: fade in the container
    projectsContainer.classList.remove('fade-out');
    projectsContainer.classList.add('fade-in');
  }, 300); // Duration matches your CSS transition
}



// Create Pagination Buttons
function updatePaginationButtons() {
  const paginationContainer = document.getElementById('pagination');
  paginationContainer.innerHTML = '';

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement('button');
    pageButton.innerText = i;
    pageButton.classList.add('page-button');

    if (i === currentPage) {
      pageButton.classList.add('active');
    }

    pageButton.onclick = () => {
  if (i !== currentPage) {
    currentPage = i;
    displayProjects();

    const projectSection = document.getElementById('projects');

    // Always scroll to the chart area
    setTimeout(() => {
      projectSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300); // Delay matches your fade transition
  }
};



    paginationContainer.appendChild(pageButton);
  }
}


// Initial load
displayProjects();