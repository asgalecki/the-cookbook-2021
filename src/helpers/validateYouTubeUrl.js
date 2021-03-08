const validateYouTubeUrl = (youtubeUrl) => {
  let url = youtubeUrl;
  if (url !== undefined || url === '') {        
    // eslint-disable-next-line no-useless-escape
    let regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
    let match = url.match(regExp);
    if (match && match[2].length === 11) {
      const value = 'https://www.youtube.com/embed/' + match[2];
      return value;
    } else {
      return false;
    }
  }
};

export default validateYouTubeUrl;