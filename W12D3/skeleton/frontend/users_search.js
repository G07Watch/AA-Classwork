class UserSearch{
  constructor($search){
    this.search = $search;
    this.render();
  };

  render(){
    this.search.append("<input type='text'></input>");
  };
}

export default UserSearch;