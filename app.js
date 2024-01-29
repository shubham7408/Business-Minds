export const blogData = [
    {
        heading: "The Future of Work: How AI is Changing the Job Landscape",
        img: "./blogImages/1.png",
        content:"Artificial intelligence (AI) is transforming the way we work, learn and live. AI is not only automating tasks and processes, but also creating new opportunities and challenges for workers, employers and society. In this blog post, we will explore some of the impacts and implications of AI on the future of work.<br><br>AI and Automation<br>One of the most visible effects of AI is the automation of routine and repetitive tasks, such as data entry, customer service, accounting and manufacturing. According to a report by McKinsey, up to 45% of current work activities could be automated by 2030, affecting 800 million workers worldwide. However, automation does not necessarily mean job loss, as new roles and tasks will emerge to complement and augment human capabilities. For example, AI can enhance human creativity, problem-solving and decision-making by providing insights, recommendations and feedback.<br><br>AI and Skills<br>Another effect of AI is the changing demand for skills in the labor market. As AI takes over some of the cognitive and manual tasks, workers will need to develop new skills and competencies to adapt and thrive in the digital economy. Some of the skills that will be in high demand include emotional intelligence, critical thinking, communication, collaboration and lifelong learning. Moreover, workers will need to be flexible and agile, as they may have to switch careers or roles multiple times in their lifetime.<br><br>AI and Education<br>To prepare workers for the future of work, education systems will also need to evolve and innovate. AI can offer new ways of learning and teaching, such as personalized learning, adaptive assessment, gamification and peer-to-peer learning. AI can also help educators design curricula, monitor student progress and provide feedback. However, education systems will also face challenges such as ensuring quality, equity and ethics in the use of AI. Furthermore, education systems will need to foster a culture of lifelong learning, as workers will need to continuously update their skills and knowledge in the face of rapid technological change.<br><br>AI and Society<br>Finally, AI will have broader implications for society as a whole, such as economic growth, social welfare, ethical values and human rights. AI can potentially boost productivity, innovation and competitiveness, creating new industries, markets and jobs. AI can also improve the quality of life for many people by enhancing health care, education, entertainment and security. However, AI also poses risks and challenges such as unemployment, inequality, bias, discrimination and privacy. Therefore, it is important to ensure that AI is developed and used in a responsible and inclusive manner that respects human dignity and values."
    },
    {
        heading:
            "The Importance of Authenticity in Business: Why Authenticity is Key to Building Trust with Your Customers",
        img: "./blogImages/2.png",
    },
    {
        heading:
            "Top Business Trends That Will Shape the Future of the Industry",
        img: "./blogImages/3.png",
    },
    {
        heading:
            "How to Build a Strong Brand Identity that Resonates with Your Target Audience",
        img: "./blogImages/4.png",
    },
    {
        heading:
            "Why Networking is Essential for Entrepreneurs: Building Valuable Connections in the Industry",
        img: "./blogImages/5.png",
    },
    {
        heading:
            "How Storytelling Can Help You Connect with Your Audience and Build Brand Loyalty",
        img: "./blogImages/6.png",
    },
    {
        heading:
            "How to Stay Ahead of the Competition: Tips for Keeping Up with the Latest Business Trends and Innovations",
        img: "./blogImages/7.png",
    },
    {
        heading:
            "Why Diversity and Inclusion are Critical for Building a Stronger, More Inclusive Workplace Culture",
        img: "./blogImages/8.png",
    },
    {
        heading:
            "Outsourcing 101: How Small Businesses Can Save Time, Money, and Resources",
        img: "./blogImages/9.png",
    },
    {
        heading:
            "Content Marketing 101: How Small Businesses Can Use Content to Drive Growth",
        img: "./blogImages/2.png",
    },
    {
        heading:
            "Lean Startup 101: A Guide to Reducing Risk and Accelerating Growth.",
        img: "./blogImages/2.png",
    },
    {
        heading:
            "Porter's Five Forces by Michael E. Porter: Understand the competitive forces that shape business strategy.",
    },
    {
        heading:
            "The Power of Emotional Intelligence: Discover how emotional intelligence influences leadership and decision-making",
    },
    {
        heading:
            "The Four Types of Organizational Culture: Categorize and shape organizational culture for business success.",
    },
    {
        heading:
            'The Art of Networking" by Harvard Business Review: Master networking strategies for career advancement.',
    },
    { heading: "The Art of Negotiation: Strategies for Business Success." },
    {
        heading:
            "Financial Planning for Small Businesses: Ensuring Long-Term Viability.",
    },
];
const postsPerPage = 9; // Change this to the number of posts you want per page
const totalPages = Math.ceil(blogData.length / postsPerPage);
const blogContainer = document.getElementById("blog-container");

function displayPosts(pageNumber) {
    blogContainer.innerHTML = "";

    const start = (pageNumber - 1) * postsPerPage;
    const end = pageNumber * postsPerPage;
    const displayedPosts = blogData.slice(start, end);

    displayedPosts.forEach((item, index) => {
        const blogDiv = document.createElement("div");
        blogDiv.classList.add("blogPost"); // Add class to identify blog post

        if (item.img) {
            const blogImg = document.createElement("img");
            blogImg.setAttribute("src", item.img);
            blogImg.setAttribute("width", "100%");
            blogDiv.appendChild(blogImg);
        }

        const blogHeading = document.createElement("h3");
        const blogDesc = document.createElement("div");
        blogHeading.innerHTML = item.heading;
        blogDesc.innerHTML= item.content;
        blogDiv.appendChild(blogHeading);
        blogContainer.appendChild(blogDiv);

        // On clicking the blog post, open in a new tab
        blogDiv.addEventListener("click", (e) => {
            e.preventDefault();
            window.open(`blog_post.html?index=${start + index}`, "_blank");
            let blogContentDiv = document.getElementById("blogContent");
            if(blogContentDiv){
                blogContentDiv.innerHTML = blogDesc;
            }
        });
    });
}

function createPaginationButtons() {
    const paginationContainer = document.getElementById("pagination");

    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement("button");

        pageButton.classList.add("pagination-circle");

        pageButton.addEventListener("click", () => {
            displayPosts(i);
        });

        paginationContainer.appendChild(pageButton);
    }
}

window.addEventListener("DOMContentLoaded", function () {
    displayPosts(1);
    createPaginationButtons();
});
