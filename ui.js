class UI{
  constructor(){
    this.searchBox = document.querySelector('#search'); 
    this.publicRepos = document.querySelector('#public-repos');
    this.publicGists = document.querySelector('#public-gists');
    this.followers = document.querySelector('#followers');
    this.following = document.querySelector('#following'); 
    this.company = document.querySelector('#company'); 
    this.website = document.querySelector('#website'); 
    this.userlocation = document.querySelector('#location'); 
    this.memberSince = document.querySelector('#member-since'); 
    this.avatar = document.querySelector('#avatar');
    this.reposHolder = document.querySelector('#repos');
    this.result = document.querySelector('#result');
    this.viewProfile = document.querySelector('#view-profile');
    this.warning = document.getElementById('warning')
  }
  showRepo(userRepos){
    userRepos.forEach(userRepo => {
      const ui = document.createElement('div')
      ui.className = 'card card-body mb-2'
      ui.innerHTML = `
      <div class="row">
        <div  class="col-sm-3"><a id='repo-name' href="${userRepo.html_url}" >${userRepo.name}</a></div>
        <div class="col-sm-9 ">
        <span class="badge rounded p-2 text-bg-primary">Stars: ${userRepo.stargazers_count}</span>
        <span class="badge p-2 rounded text-bg-secondary">Watchers: ${userRepo.watchers}</span>
        <span class="badge rounded p-2 text-bg-success">Forks: ${userRepo.forks}</span>
        </div>
      </div>
      `
      document.querySelector('#repos').appendChild(ui)
    });
  }

  showProfile(userInfo){
    // user account info
    this.publicRepos.textContent = userInfo.public_repos
    this.publicGists.textContent = userInfo.public_gists
    this.followers.textContent = userInfo.followers
    this.following.textContent = userInfo.following
    // person user info
    this.viewProfile.setAttribute('href', userInfo.html_url)
    this.company.textContent =userInfo.company
    this.avatar.setAttribute('src', userInfo.avatar_url)
    this.website.textContent =userInfo.blog
    this.userlocation.textContent =userInfo.location
    this.memberSince.textContent = new Date(userInfo.created_at).toISOString()
    
  }
  warningMsg(msg, display){ 
    this.warning.style.display = display
    this.warning.textContent = msg
   }
  clear(){
    //  clear warning message
     this.warning.style.display = "none"
     this.warning.textContent = ""

     // show result
     this.result.style.display = 'none'

     // clear previous searched repo 
     document.querySelector('#repos').innerHTML=''

}
}
