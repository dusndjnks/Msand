import React from "react";
import { NavLink } from "react-router-dom";

const blogPosts = [
  {
    title: "Choosing the Right Sand for Your Construction",
    excerpt: "Learn how different sand types affect concrete strength and plastering quality .",
    img: "https://knippleaggregates.com/wp-content/uploads/2020/09/concrete-sand-supplier.jpg",
    date: "May 15, 2023",
  },
  {
    title: "Sustainable Sand Mining Practices",
    excerpt: "How we're implementing eco-friendly sourcing while maintaining quality standards.",
    img: "https://acceptbusiness.net/wp-content/uploads/2020/02/Concrete-Sand-White-1170x500.jpg",
    date: "April 28, 2023",
  },
];

const Blogs = () => {
  return (
    <section className="py-20 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-display font-bold text-primary mb-4">
            Latest From Our Blog
          </h2>
          <p className="text-xl text-dark max-w-2xl mx-auto">
            Insights and updates about construction materials
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-accent-2 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
            >
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                  {post.title}
                </h3>
                <p className="text-dark mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-dark/70">{post.date}</span>
                  <NavLink
                    to="/blog"
                    className="text-primary hover:text-primary-dark font-heading font-medium"
                  >
                    Read More →
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
