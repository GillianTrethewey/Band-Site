

const apiKey = "bf62226c-3d12-401b-ab50-b43718267b8d";


class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://project-1-api.herokuapp.com/";;
  }
  describe() {
    console.log(`${this.apiKey}, ${this.baseUrl}`);
  }

  async getShows() {
    let getUrl =
    this.baseUrl + "showdates?api_key=" + this.apiKey;
    console.log('getUrl: ', getUrl);
    try {
        const showsData = await axios.get(getUrl);
        console.log('shows data fetched: ', showsData.data);
        return showsData.data;
      } catch (error) {
        console.log("failed to get shows data:", error);
        throw error;
      }
  }
}

// export const showsDataFetch = async () => {
//   let getUrl =
//     "https://project-1-api.herokuapp.com/" + "showdates?api_key=" + apiKey;

//   try {
//     const showsData = await axios.get(getUrl);
//     console.log('shows data fetched: ', showsData.data);
//     return showsData.data;
//   } catch (error) {
//     console.log("failed to get shows data:", error);
//     throw error;
//   }
// };









