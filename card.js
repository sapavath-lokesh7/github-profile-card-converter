async function getGitData(userName) {
  try {
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();

    const element = document.createElement("div");
    element.className = "card";
    element.id = "card";
    element.innerHTML += `    <div class="card" id="card">
  <div class="profile">
    <div class="img">
      <img
        src="${data.avatar_url}"
        alt=""
      />
    </div>
    <div class="about">
      <h4>${data.login}</h4>
      <p>
        ${data.bio}
      </p>
    </div>
  </div>
  <div class="follow">
    <div class="followers">
      <p><b>Followers</b></p>
      <p><a href="${data.followers_url}" target="_blank">${data.followers}</a></p>
    </div>
    <div class="following">
      <p><b>Following</b></p>
      <p><a href="${data.following_url}" target="_blank">${data.following}</a></p>
    </div>
    <div class="following">
      <p><b>Public Repos</b></p>
      <p><a href="${data.repos_url}" target="_blank">${data.public_repos}</a></p>
    </div>
  </div>
  <div class="place">
    <p>
      <b>Belongs To</b> &nbsp; &nbsp;<span style="color: #e1960a"
        >${data.location}</span
      >
    </p>
  </div>
  <div class="footer">
    <div class="blog"><a href="${data.blog}" style="font-size: larger; color:  #e1960a;" target="blank"> Blog &nbsp<i class='bx bx-link' ></i></a>
    </div>
    <div class="goto">
      <a href="${data.html_url}" target="_blank">go to profile <i class='bx bx-link-external'></i></a>
    </div>
  </div>
</div>`;
    document.body.appendChild(element);
  } catch (error) {
    console.log(error);
  }
}
document.getElementById("new").addEventListener("click", () => {
  getGitData(prompt("give user name please"));
  document.getElementById("info").style.display = "none";
});
