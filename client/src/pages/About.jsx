export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-white dark:bg-gray-900'>
      <div className='max-w-2xl mx-auto p-6'>
        <div>
          <h1 className='text-3xl font-semibold mb-6 text-center text-gray-900 dark:text-white'>
            About Tech Trends
          </h1>
          <div className='text-lg text-gray-700 dark:text-gray-300'>
            <section className='mb-8'>
              <h2 className='text-xl font-semibold mb-3 text-gray-900 dark:text-white'>
                Our Mission
              </h2>
              <p className='leading-relaxed'>
                Welcome to Tech Trends, your premier destination for the latest in technology, software, and hardware. Our mission is to inform, inspire, and engage tech enthusiasts and professionals alike with high-quality content that spans the vast landscape of the tech world.
              </p>
              <p className='leading-relaxed'>
                At Tech Trends, we are passionate about technology and its potential to transform the world. Our goal is to provide our readers with insightful, accurate, and up-to-date information on the latest tech trends, innovations, and breakthroughs. Whether you're a seasoned tech expert or a curious beginner, we strive to bring you content that is both educational and engaging.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-xl font-semibold mb-3 text-gray-900 dark:text-white'>
                What We Offer
              </h2>
              <ul className='list-disc list-inside'>
                <li>
                  <strong>Tech News:</strong> Stay updated with the latest happenings in the tech industry. From groundbreaking innovations to major product releases, we cover it all.
                </li>
                <li>
                  <strong>In-Depth Articles:</strong> Dive deep into the world of technology with our detailed articles that explore concepts, technologies, and trends shaping the future.
                </li>
                <li>
                  <strong>Expert Insights:</strong> Gain valuable insights from our team of experienced writers and industry experts who share their knowledge and perspectives on various tech topics.
                </li>
                <li>
                  <strong>Guides and Tutorials:</strong> Learn new skills and enhance your tech knowledge with our comprehensive guides and tutorials designed for all skill levels.
                </li>
                <li>
                  <strong>Product Reviews:</strong> Get honest and thorough reviews of the latest tech products, helping you make informed decisions on your next purchase.
                </li>
              </ul>
            </section>

            <section className='mb-8'>
              <h2 className='text-xl font-semibold mb-3 text-gray-900 dark:text-white'>
                Our Team
              </h2>
              <p className='leading-relaxed'>
                Our team consists of passionate tech enthusiasts, skilled writers, and industry professionals who are dedicated to delivering the best content possible. We believe in the power of technology to change lives, and we are here to share that journey with you.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-xl font-semibold mb-3 text-gray-900 dark:text-white'>
                Join Us
              </h2>
              <p className='leading-relaxed'>
                We invite you to join our growing community of tech lovers. Follow us on social media, subscribe to our newsletter, and be a part of the conversation. Whether you're here to stay informed, learn something new, or simply share your passion for technology, Tech Trends is your go-to resource.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-semibold mb-3 text-gray-900 dark:text-white'>
                Contact Us
              </h2>
              <p className='leading-relaxed'>
                Thank you for visiting Tech Trends. If you have any questions, feedback, or suggestions, feel free to reach out to us. We'd love to hear from you!
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
