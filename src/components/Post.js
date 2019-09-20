export default function Post(post) {
  const postData = post.data();
  return `
      <section class='main-content__posts'>
          <h3>${postData.title}</h3>
          <p>${postData.content}</p>
      </section>
          
      <section class='update-post'>
          <input class='update-post__postTitle' type='text' placeholder='edit title'>
          <input class='update-post__postBody' type='text' placeholder='edit content'>
          <button class='update-post__submit'>Edit</button>
          <input class='update-post__id' type='hidden' value="${post.id}">
      </section>
  
      `;
}
