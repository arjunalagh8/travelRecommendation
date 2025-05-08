async function searchDestinations() {
    const query = document.getElementById('search').value.toLowerCase();
    const response = await fetch('travel_recommendation_api.json');
    const data = await response.json();
  
    const results = data.destinations.filter(dest =>
      dest.name.toLowerCase().includes(query) || dest.description.toLowerCase().includes(query)
    );
  
    console.clear();
    console.log("Search Results:", results);
  }
  