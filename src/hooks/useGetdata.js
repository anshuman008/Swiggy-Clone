

const useGetdata = async(url)=>{
    const result = await axios.get(
        "https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.61450&lng=77.30630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",{
          headers: {
          'x-cors-api-key': 'temp_401e3ce91a82fc8b12b796883eab4672'
          }
        }
      );
}