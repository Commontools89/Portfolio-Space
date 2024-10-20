export default function Blog() {
  const featuredBlogs = [
    { id: 1, title: "SpaceX's Latest Mission: What You Need to Know", source: "Space.com", url: "#" },
    { id: 2, title: "The Future of Artificial Intelligence in 2023", source: "TechCrunch", url: "#" },
    { id: 3, title: "NASA's New Discovery on Mars", source: "ScienceDaily", url: "#" },
    { id: 4, title: "Quantum Computing: A Beginner's Guide", source: "Wired", url: "#" },
    { id: 5, title: "The Rise of Edge Computing in IoT", source: "IEEE Spectrum", url: "#" },
    { id: 6, title: "Exploring the Possibilities of Nuclear Fusion", source: "Scientific American", url: "#" },
    { id: 7, title: "Cybersecurity Trends to Watch in 2023", source: "Dark Reading", url: "#" },
    { id: 8, title: "The James Webb Space Telescope's Latest Findings", source: "Nature", url: "#" },
    { id: 9, title: "Advancements in Green Technology", source: "CleanTechnica", url: "#" },
    { id: 10, title: "The Ethics of Gene Editing: CRISPR and Beyond", source: "MIT Technology Review", url: "#" },
  ];

  return `
    <div id="blog" class="component">
      <h2>Featured Blogs</h2>
      <p>Discover today's top ten blogs in tech and space:</p>
      <p class="update-note">These featured blogs are updated daily to bring you the latest insights!</p>
      <div class="featured-blogs-container">
        ${featuredBlogs.map(blog => `
          <div key=${blog.id} class="blog-item">
            <a href="${blog.url}" target="_blank" rel="noopener noreferrer">
              <h3>${blog.title}</h3>
              <span class="blog-source">Source: ${blog.source}</span>
            </a>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}