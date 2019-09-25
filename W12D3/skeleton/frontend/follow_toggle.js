import APIUtil from './api_util.js';

class FollowToggle {
  constructor($el) {
    this.el = $el;
    this.userId = this.el.data("user-id");
    this.followState = this.el.data("initial-follow-state");
    this.pageId = this.el.data("page-id")
    this.render();
    this.handleClick();
  }

  render() {
    if (this.followState === true) { 
      // this.el.prop("disabled", true)
     this.el.text('Unfollow!');
     }
    else{
      this.el.text('Follow!');
    }
    console.log(this.pageId);
    //this.el.prop("disabled", false)
  }

  handleClick(){
    this.el.on("click",(e) =>{
      e.preventDefault();

      if (this.followState === true){
        //this.followState = false
        APIUtil.unfollowUser(this.pageId).then(this.success())// this.render()
      }
      else{
        APIUtil.followUser(this.pageId).then(this.success())
      }

    })
  }

    success() {
      this.el.prop("disabled", true)
      if (this.followState === true) {
        this.followState = false;
        this.render();
        this.el.prop("disabled", false);
      } else {
        this.followState = true;
        this.render();
        this.el.prop("disabled", false);
      }
    }
  
};



export default FollowToggle;

