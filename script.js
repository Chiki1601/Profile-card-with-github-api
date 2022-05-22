$(function(){
  
    var username = 'Chiki1601';
    var requri   = 'https://api.github.com/users/chiki1601';
    var repouri  = 'https://api.github.com/users/chiki1601/repos';
    
    requestJSON(requri, function(json) {
      
        var fullname   = json.name;
        var username   = json.login;
        var aviurl     = json.avatar_url;
        var profileurl = json.html_url;
        var location   = json.location;
        var followersnum = json.followers;
        var followingnum = json.following;
        var reposnum     = json.public_repos;
        
        if(fullname == undefined) { fullname = username; }
      
        var outhtml = '<p class="username">@<a href="'+profileurl+'" target="_blank">'+username+'</a></p>';
        outhtml = outhtml + '<div class="repositories"><p style="color: #12ACC8; font-weight: bold;">'+reposnum+'</p><p>repositories</p></div>';
        outhtml = outhtml + '<div class="info"><div class="followers"><p style="color: #12ACC8; font-weight: bold;">'+followersnum+'</p><p>followers</p></div>';
        outhtml = outhtml + '<div class="following"><p style="color: #12ACC8; font-weight: bold;">'+followingnum+'</p><p>following</p></div>';

   $('#info-card').html(outhtml);
        
    }); // end requestJSON Ajax call
  }); // end click event handler
  
  function requestJSON(url, callback) {
    $.ajax({
      url: url,
      complete: function(xhr) {
        callback.call(null, xhr.responseJSON);
      }
 });
}