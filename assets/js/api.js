// const nama_function = () => {
//     console.log('testing data display')
// }

// nama_function();

const getDataFromAPI = () => {
    const elementLatestBlog = document.getElementById('latestBlog');

    fetch('https://sample-api.myalkes.com/api/v1/posts', {

        // metode pengambilan data - HTTP Request Method 
        method: "GET",

        headers: {
            "Content-Type" : "application/json"
        }
    })
    .then((response) => response.json())
    .then((dataBlog) => {
        console.log(dataBlog);

        dataBlog.posts.map((blog) => {
            elementLatestBlog.innerHTML += `
            
                <div class="mb-3 d-flex justify-content-between">
                    <div class="pr-3">
                        <h2 class="mb-1 h4 font-weight-bold">
                        <a class="text-dark" href="/article.html?postId=${blog.id}">${blog.title}</a>
                        </h2>
                        <p>
                            ${blog.short_text}
                        </p>
                        <div class="card-text text-muted small">
                            Jake Bittle in SCIENCE
                        </div>
                        <small class="text-muted">${new Date(blog.created_at).toDateString()}; 5 min read</small>
                    </div>
                    <img height="120" src="${blog.image}">
                </div>

            `
        })
    })
}

getDataFromAPI();

