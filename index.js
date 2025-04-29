import { posts } from "./data.js";

const postHTML = document.querySelector("main");

function renderPosts(){
    for (let i = 0; i < posts.length; i++ ){
        postHTML.innerHTML +=
        `<div class="post">
            <div class="post-head">
                <img class="avatar" src="${posts[i].avatar}" />
                    <div>
                        <h3 class="name">${posts[i].name}</h3>
                        <p class="location">${posts[i].location}</p>
                    </div>
            </div>
            <img class="post-img" src="${posts[i].post}" />
            <img class="icon-heart" src="images/icon-heart.png" alt="" data-heart=${i} />
            <img class="icon-comment" src="images/icon-comment.png" alt="" />
            <img class="icon-dm" src="/images/icon-dm.png" alt="" />
            <p class="likes">${posts[i].likes} likes</p>
            <p class="caption">
                <span class="caption-bold">${posts[i].username}</span>
                ${posts[i].comment}
            </p>
        </div>
        `;
    }
}

renderPosts();