function fetchAPI() {
    const url="https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/DElhi?key=LHDSC3BZ7BM582CRZ3VJWFCDQ";
    fetch(url).then((res)=> res.json()).then(console.log);

}
fetchAPI();