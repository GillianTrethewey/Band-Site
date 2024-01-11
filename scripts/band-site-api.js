const apiKey = "bf62226c-3d12-401b-ab50-b43718267b8d";

class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://project-1-api.herokuapp.com/";
  }
  describe() {
    console.log(`${this.apiKey}, ${this.baseUrl}`);
  }

  async getShows() {
    let getUrl = this.baseUrl + "showdates?api_key=" + this.apiKey;
    try {
      const showsData = await axios.get(getUrl);
      return showsData.data;
    } catch (error) {
      throw error;
    }
  }

  async getComments() {
    let getUrl = this.baseUrl + "comments?api_key=" + this.apiKey;
    try {
      const commentsData = await axios.get(getUrl);
      return commentsData.data;
    } catch (error) {
      throw error;
    }
  }

  async postComments(newCommentObj) {
    let postUrl = this.baseUrl + "comments?api_key=" + this.apiKey;
    try {
        const commentsPost = await axios.post(postUrl, newCommentObj);
        return;
    } catch(error) {
        throw error;
    }
  }
  }

