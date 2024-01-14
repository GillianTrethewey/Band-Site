const apiKey = "bf62226c-3d12-401b-ab50-b43718267b8d";

class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://project-1-api.herokuapp.com/";
  }

  async getShows() {
    let getUrl = this.baseUrl + "showdates?api_key=" + this.apiKey;
    try {
      const getShowsResponse = await axios.get(getUrl);
      return getShowsResponse.data;
    } catch (error) {
      throw error;
    }
  }

  async getComments() {
    let getUrl = this.baseUrl + "comments?api_key=" + this.apiKey;
    try {
      const getCommentsResponse = await axios.get(getUrl);
      return getCommentsResponse.data;
    } catch (error) {
      throw error;
    }
  }

  async postComment(newCommentObj) {
    let postUrl = this.baseUrl + "comments?api_key=" + this.apiKey;
    try {
      const postCommentResponse = await axios.post(postUrl, newCommentObj);
      return postCommentResponse;
    } catch (error) {
      throw error;
    }
  }

  async likeComment(id) {
    let putUrl = this.baseUrl + "comments/" + id + "/like?api_key=" + this.apiKey;
    try {
      const putLikeResponse = await axios.put(putUrl, id);
      return putLikeResponse;
    } catch (error) {
      throw error;
    }
  }

  async deleteComment(id) {
    let deleteUrl = this.baseUrl + "comments/" + id + "?api_key=" + this.apiKey; 
    try {
      const deleteCommentResponse = await axios.delete(deleteUrl,id);
      console.log(deleteCommentResponse);
      return deleteCommentResponse;
    } catch (error) {
      throw error;
    }
  }
  }
