const projects = [
    {
  title: "Repurposing Phoenix Offices to Industrial and Apartments",
  description: "An interactive story map highlighting how office properties across Phoenix are being transformed into industrial, multifamily, retail, and other uses. Nearly 70% of these conversions have shifted toward industrial uses, including data centers and self-storage facilities.",
  image: "images/office_conversion.png",
  link: "https://atlas.colliers.com/portal/apps/storymaps/stories/fa47e7901b4a42acbe40919e36fec81c"
},
{
  title: "Broker Case Study",
  description: "A dashboard visualizing market trends to support a broker’s land acquisition case. It includes analysis of surrounding property types, square footage within specific distance ranges, and other key insights to help the broker and client make informed investment decisions.",
  image: "images/case_study.png",
  link: "https://atlas.colliers.com/portal/apps/dashboards/bbb99adbdfcc4537b080f148f1f937c9"
},
{
  title: "Phoenix CRE Market Analysis",
  description: "An in-depth article analyzing commercial real estate investment trends across Phoenix, helping investors identify hot spots and high-growth areas within each property sector.",
  image: "images/investment.png",
  link: "investment.html"  // local link
},
{
  title: "Employees Living Farther Away Signals Office Market Recovery Challenge",
  description: "An article exploring how employees living farther from work locations are signaling challenges for office market recovery.",
  image: "images/dot.gif",
  link: "https://www.costar.com/article/183709170/employees-living-farther-away-signals-office-market-recovery-challenge"
},
 {
    title: "The Sweet 16 of US Retail Markets Square Off",
    description: "A ranking and matchup overview of the top 16 US retail markets and their key performance indicators.",
    image: "images/sweet16.gif",
    link: "https://www.costar.com/article/1699284720/the-sweet-16-of-us-retail-markets-square-off"
  },
  {
    title: "Ski-Adjacent Real Estate Feels the Heat from Canada’s Rough Year of Forest Fires",
    description: "An analysis of how Canada’s forest fires are impacting ski-adjacent real estate markets and valuations.",
    image: "images/Can_fire.gif",
    link: "https://www.costar.com/article/351289022/ski-adjacent-real-estate-feels-the-heat-from-canadas-rough-year-of-forest-fires"
  },
  {
    title: "Pickleball Craze Sweeps America Demand Soars as Public Courts Struggle to Keep Up",
    description: "A feature on the nationwide surge in pickleball popularity and the resulting strain on public court availability.",
    image: "images/pickle.png",
    link: "https://www.costar.com/article/527760433/pickleball-craze-sweeps-america-demand-soars-as-public-courts-struggle-to-keep-up"
  },
  {
    title: "New York Subway and London Underground Stage a Comeback Slowly",
    description: "A report examining gradual ridership recoveries on the New York Subway and London Underground post-pandemic.",
    image: "images/subway.png",
    link: "https://www.costar.com/article/199367457/new-york-subway-and-london-underground-stage-a-comeback-slowly"
  },
  {
    title: "EV Battery Visualization",
    description: "An interactive map visualizing electric vehicle battery capacity, distribution, and performance metrics.",
    image: "images/mapbox_EV.gif",
    link: "https://nicoshih.github.io/EV_battery/"
  },
  {
    title: "Regional Dutch Bros Coffee Chain Brews Up National Expansion",
    description: "Coverage of Dutch Bros Coffee’s strategic plans and timeline for expanding its regional chain nationwide.",
    image: "images/dutch.png",
    link: "https://www.costar.com/article/478265115/regional-dutch-bros-coffee-chain-brews-up-national-expansion"
  },
  {
    title: "Severe Weather Expected to Make Commercial Property Insurance More Costly",
    description: "An article forecasting rising commercial property insurance costs and harder-to-find coverage due to extreme weather.",
    image: "images/fire.png",
    link: "https://www.costar.com/article/1436720963/severe-weather-expected-to-make-commercial-property-insurance-more-costly-harder-to-find"
  },
  {
    title: "Hawaii Wildfires Rip Through Heart of Maui’s Commercial District",
    description: "A news story detailing the impact of the Maui wildfires on the island’s core commercial district and properties.",
    image: "images/maui.png",
    link: "https://www.costar.com/article/1484428056/hawaii-wildfires-rip-through-heart-of-mauis-commercial-district-killing-dozens-destroying-property"
  },
  {
    title: "Here is What Separated Winners From Losers in the 2023 Office Market",
    description: "An analysis contrasting top-performing and underperforming office markets in 2023.",
    image: "images/office_sales.png",
    link: "https://www.costar.com/article/725429132/here-is-what-separated-winners-from-losers-in-the-2023-office-market"
  },
  {
    title: "Best Places to Retire Pennsylvania Dominates New Ranking",
    description: "A ranking study identifying the best U.S. retirement destinations, led by Pennsylvania markets.",
    image: "images/fl.png",
    link: "https://www.costar.com/article/1035547232/best-places-to-retire-pennsylvania-dominates-new-ranking-as-florida-markets-drop"
  },
  {
    title: "Warehouse Opposition Hardens in New Jersey",
    description: "A report on growing community resistance to proposed warehouse megaprojects in New Jersey.",
    image: "images/FukHuaaaAAMoTWl.png",
    link: "https://www.costar.com/article/156658731/warehouse-opposition-hardens-in-new-jersey-against-proposed-megaprojects"
  },
  {
    title: "The World Cup of Property - Chart 1",
    description: "A chart comparing global property markets, highlighting performance in China, the U.S., and the U.K.",
    image: "images/soccer1.png",
    link: "https://www.costar.com/article/279444222/the-world-cup-of-property-china-and-us-dominate-but-uk-beats-us-in-final"
  },
  {
    title: "The World Cup of Property - Chart 2",
    description: "A follow-up chart illustrating international real estate market standings across major regions.",
    image: "images/soccer2.png",
    link: "https://www.costar.com/article/279444222/the-world-cup-of-property-china-and-us-dominate-but-uk-beats-us-in-final"
  },
  {
    title: "Workplace Survey Finds Three-Day Office Schedules Reign",
    description: "Survey results highlighting the prevalence of three-day in-office work schedules within hybrid models.",
    image: "images/wfh.png",
    link: "https://www.costar.com/article/1493751318/workplace-survey-finds-three-day-office-schedules-reign-as-hybrid-option"
  },
  {
    title: "More Than 16,000 NYC Hotel Rooms Used to Accommodate Unhoused Migrants",
    description: "An exposé on New York City repurposing over 16,000 hotel rooms to house unhoused migrants.",
    image: "images/hotelmap.png",
    link: "https://www.costar.com/article/1900939477/more-than-16000-nyc-hotel-rooms-used-to-accommodate-unhoused-migrants"
  },
  {
    title: "Federal Government Awards Billions in Grants for Passenger Rail Projects",
    description: "A report on federal grant allocations totaling billions for passenger rail projects nationwide.",
    image: "images/railmap.png",
    link: "https://www.costar.com/article/2079666152/federal-government-awards-billions-of-dollars-in-grants-for-passenger-rail-projects-nationwide"
  },
  {
    title: "Real Estate Stocks Improve but Offer Negative Return in First Five Months of 2023",
    description: "An overview of real estate stock performance showing improvement despite negative returns early in 2023.",
    image: "images/heatmap.png",
    link: "https://www.costar.com/article/864604261/real-estate-stocks-improve-but-offer-negative-return-in-first-five-months-of-2023"
  },
  {
    title: "Job Openings Increase for US Trade Sector and Financial Services",
    description: "An article detailing a rise in job vacancies across the U.S. trade and financial services sectors.",
    image: "images/job_open.png",
    link: "https://www.costar.com/article/2029752861/job-openings-increase-for-us-trade-sector-and-financial-services"
  },
  {
    title: "Houston Makes Biggest Jump on List of Top 20 Cities",
    description: "A migration ranking showing Houston’s significant jump among the top 20 U.S. cities.",
    image: "images/slope.png",
    link: "https://www.costar.com/article/1312928831/houston-makes-biggest-jump-on-list-of-top-20-cities-where-people-are-moving"
  },
  {
    title: "Suburban Apartment Rents Continue to Rise With Population Surge",
    description: "Analysis of suburban apartment rent growth driven by recent population increases.",
    image: "images/rent.png",
    link: "https://www.costar.com/article/1685179504/suburban-apartment-rents-continue-to-rise-with-population-surge"
  },
  {
    title: "Los Angeles Skyscraper, Unfinished and for Sale, Draws Potential Buyers — and New Ideas",
    description: "A feature on an unfinished L.A. skyscraper listing that’s attracting creative redevelopment proposals.",
    image: "images/3dmap.png",
    link: "https://www.costar.com/article/2030217368/los-angeles-skyscraper-unfinished-and-for-sale-draws-potential-buyers-%E2%80%94-and-new-ideas?utm_campaign=news&utm_content=https://www.costar.com/ar&utm_medium=social&utm_source=twitter&utm_term=news"
  },
  {
    title: "The Most Popular Grocery Store in Each State",
    description: "A nationwide survey identifying the leading grocery chain in each U.S. state.",
    image: "images/grocery.png",
    link: "https://www.costar.com/article/1639321228/the-most-popular-grocery-store-in-each-state"
  },
  {
    title: "Younger Households Propel Surge in US Homeownership",
    description: "A report on how younger demographics are driving a surge in U.S. homeownership rates.",
    image: "images/young_rent.png",
    link: "https://www.costar.com/article/1929064364/younger-households-propel-surge-in-us-homeownership"
  },
  {
    title: "US Residents Flocking to Florida Send Rent and Home Prices Soaring",
    description: "Coverage of migration trends to Florida and their effects on local rent and home prices.",
    image: "images/rent_soar.png",
    link: "https://www.costar.com/article/384748660/us-residents-flocking-to-florida-send-rent-and-home-prices-soaring"
  },
  {
    title: "US Industrial Production Rebounds",
    description: "An economic brief highlighting the recent rebound in U.S. industrial production.",
    image: "images/grid_bar.png",
    link: "https://www.costar.com/article/1929375453/us-industrial-production-rebounds"
  },
  {
    title: "New York Developer Gambles on Las Vegas Shift Toward Strip-Facing Stores",
    description: "A case study on a New York developer’s wager on retail spaces facing the Las Vegas Strip.",
    image: "images/vegas.png",
    link: "https://www.costar.com/article/37004062/new-york-developer-gambles-on-las-vegas-shift-toward-strip-facing-stores?utm_campaign=news&utm_content=https://www.costar.com/ar&utm_medium=social&utm_source=twitter&utm_term=news"
  },
  {
    title: "Americans Don't Plan to Slash Holiday Spending, JLL Survey Says",
    description: "Survey insights showing U.S. consumers’ intentions to maintain holiday spending despite economic pressures.",
    image: "images/dot.jpeg",
    link: "https://www.costar.com/article/1706469286/americans-dont-plan-to-slash-holiday-spending-jll-survey-says"
  },
  {
    title: "This Property Executive Looks To Turn Recreational Vehicle Demand Into REIT Storage Powerhouse",
    description: "A profile of an executive leveraging recreational vehicle storage demand to expand a REIT storage business.",
    image: "images/rv.png",
    link: "https://www.costar.com/article/1749472735/this-property-executive-looks-to-turn-recreational-vehicle-demand-into-reit-storage-powerhouse?utm_campaign=news&utm_content=Gary+Wojtaszek+came+out+o&utm_medium=social&utm_source=twitter&utm_term=news"
  },
  {
    title: "Property Insurance Costs Surge",
    description: "An article on escalating commercial property insurance premiums amid changing market conditions.",
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
            
          </div>
        </div>
        <div class="content">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <a href="${project.link}" target="_blank"><b>View Project</b></a>
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

    setTimeout(() => {
      const offset = 80; // adjust if needed
      const targetPosition = document.getElementById('projects-section').offsetTop;
      window.scrollTo({
        top: targetPosition - offset,
        behavior: 'smooth'
      });
    }, 300); // wait until fade-in finishes
  }
};



    paginationContainer.appendChild(pageButton);
  }
}


// Initial load
displayProjects();
