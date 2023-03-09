const c = console.log.bind(console);
const searchBox = document.querySelector('#search'), 
      result = document.querySelector('#result'),
      repoHolder = document.querySelector('#repos');
     
const req = new Github()
const ui = new UI()

searchBox.addEventListener('keyup', findUser)
addEventListener('load', ui.clear)

// getting users data from api
async function findUser(e){
   // clear warning message
   ui.warningMsg('', 'none')
  const searchBoxValue = e.target.value
  if(searchBoxValue === ''){
    ui.clear()
  } else{
    req.get(`https://api.github.com/users/${searchBoxValue}`)
    .then(userInfo => {
      
      if(userInfo.login !== undefined){
        // show result
        result.style.display = 'block'
        // clear previous searched repo 
        repoHolder.innerHTML=''
        // show profile
        ui.showProfile(userInfo)
        // get repos 
        req.getRepos(`https://api.github.com/users/${searchBoxValue}/repos`)
        .then(userRepos=> ui.showRepo(userRepos))
      } else {
        ui.warningMsg('Result Not Found', 'block')
      }
    })
 
  }
}






