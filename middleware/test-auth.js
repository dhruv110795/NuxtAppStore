export default function(context){
  return context.$axios.post("https://reqres.in/api/login",
  {
    'email':'eve.holt@reqres.in',
    'password':'cityslicka'
  }).then(res => {
    console.log(">>>>>>>>>>>>>>>>>>>",res.data.token)
    if(res.data.token !== "QpwL5tke4Pnpja7X4"){
      context.redirect("/")
    }
  })
}