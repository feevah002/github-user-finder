class Github{
  constructor(){
    this.client_id ='15e2a23fda08c7884e7c'
    this.client_secret ='7db3dc982d9819881a648dc9ca761699d8df16dd'
    this.repos_count =10
    // order of repo= ascending
    this.repos_sort ='created: asc'
  }
  async get(url){
    const response = await fetch(`${url}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
    return response.json()
    // return{
    //   // you can return more than one thing in form of an object
    //   response : response.json()
    // } 
  }
  async getRepos(url){
    const response = await fetch(`${url}?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)
    
    return response.json()
  }
}
