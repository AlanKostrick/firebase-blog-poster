export default function Posts(posts) {
  return `
    <div>
    ${posts.docs
      .map(post => {
        const postData = post.data();
        return `
            <section class='main-content__posts'>
                <h3>${postData.title}</h3>
                <p>${postData.content}</p>
                <input class='delete-post__id' type='hidden' value="${post.id}">
                <button class='delete-post__submit'>&times</button>
                <button class='edit-post__submit'>...</button>
            </section>
        `;
      })
      .join("")}
    </div>
    <section class='add-post'>
        <input class='add-post__postTitle' type='text' name='title' placeholder='post title'>
        <input class='add-post__postBody type='text' name='content' placeholder='post content'>
        <button class='add-post__submit'>Submit</button>
    </section>
    `;
}
