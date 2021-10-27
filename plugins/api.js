export default ({app},inject) => {
  const api = async function(url){
    return await fetch(url).then(res => res.json());
  }
  inject('api',api)
}