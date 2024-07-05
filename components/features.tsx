
import Link from "next/link"

export default function Features() {
  return (
    <section className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-3 lg:p-6">
      <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
        <Link href="https://en.wikipedia.org/wiki/Taj_Mahal" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View</span>
        </Link>
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/1d/Taj_Mahal_%28Edited%29.jpeg" alt="Taj Mahal" className="object-cover w-full h-64" />
        <div className="p-4 bg-background">
          <h3 className="text-xl font-bold">Taj Mahal</h3>
          <p className="text-sm text-muted-foreground">
            One of the most iconic and beautiful monuments in the world, the Taj Mahal is a testament to India's rich
            architectural heritage.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
        <Link href="https://en.wikipedia.org/wiki/Himalayas" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View</span>
        </Link>
        <img src="https://c02.purpledshub.com/uploads/sites/41/2023/08/Himalayas-Getty-e1691664200559-1024x684.jpg?w=1200" alt="Himalayan Mountains" className="object-cover w-full h-64" />
        <div className="p-4 bg-background">
          <h3 className="text-xl font-bold">Himalayan Mountains</h3>
          <p className="text-sm text-muted-foreground">
            The majestic Himalayan mountain range, home to some of the highest peaks in the world, offers breathtaking
            natural beauty and adventure.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
        <Link href="https://en.wikipedia.org/wiki/ISRO" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View</span>
        </Link>
        <img src="https://media.licdn.com/dms/image/D5612AQH7d1aTU312Iw/article-cover_image-shrink_720_1280/0/1692785210884?e=2147483647&v=beta&t=EGaO43slYXborFey21Gp2zGi_LgZCGeEIQNuPc75P1E" alt="Holi Festival" className="object-cover w-full h-64" />
        <div className="p-4 bg-background">
          <h3 className="text-xl font-bold">Space Technology</h3>
          <p className="text-sm text-muted-foreground">
          India has significantly advanced in space technology, marked by milestones like the Chandrayaan and Mangalyaan missions. The Indian Space Research Organisation (ISRO) has demonstrated prowess in satellite launches, lunar exploration, and Mars missions. These achievements underscore India's growing capability in space exploration and its contributions to scientific knowledge and international cooperation in space research.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
        <Link href="https://www.welcomerajasthan.com/rajasthan-textiles.htm" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View</span>
        </Link>
        <img src="https://www.rajasthantourplanner.com/blog/wp-content/uploads/2021/04/Famous-Textiles-of-Rajasthan.jpg" alt="Rajasthani Textiles" className="object-cover w-full h-64" />
        <div className="p-4 bg-background">
          <h3 className="text-xl font-bold">Rajasthani Textiles</h3>
          <p className="text-sm text-muted-foreground">
            The vibrant and intricate textiles of Rajasthan, including block printing, embroidery, and tie-dye, are a
            testament to India's rich textile heritage.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
        <Link href="https://nalandauniv.edu.in" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View</span>
        </Link>
        <img src="https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2022/02/18114941/Nalanda-University.jpg" alt="Ayurvedic Medicine" className="object-cover w-full h-64" />
        <div className="p-4 bg-background">
          <h3 className="text-xl font-bold">Nalanda University</h3>
          <p className="text-sm text-muted-foreground">
          Nalanda University, rebuilt in modern times, is a revival of the ancient seat of learning dating back to the 5th century CE. Located in Bihar, India, it symbolizes a resurgence of educational excellence in fields such as Buddhist studies, philosophy, and historical research. The revived university aims to foster global collaboration and scholarly pursuit, echoing its historical significance as a center of intellectual exchange and cultural richness.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
        <Link href="https://en.wikipedia.org/wiki/Yoga" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View</span>
        </Link>
        <img src="https://Image.freepik.com/free-vector/set-yoga-postures_1308-119286.jpg" alt="Yoga" className="object-cover w-full h-64" />
        <div className="p-4 bg-background">
          <h3 className="text-xl font-bold">Yoga</h3>
          <p className="text-sm text-muted-foreground">
            Originating in India, the ancient practice of yoga offers a holistic approach to physical, mental, and
            spiritual well-being.
          </p>
        </div>
      </div>


      <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
        <Link href="https://en.wikipedia.org/wiki/Information_technology_in_India#:~:text=The%20information%20technology%20(I.T.)%20industry,245%20billion%20in%20FY%202023." className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View</span>
        </Link>
        <img src="https://st.adda247.com/https://adda247jobs-wp-assets-prod.adda247.com/articles/wp-content/uploads/2023/11/04122906/Information-Technology-Development-in-India.jpg" alt="it" className="object-cover w-full h-64" />
        <div className="p-4 bg-background">
          <h3 className="text-xl font-bold">Information Technology in India</h3>
          <p className="text-sm text-muted-foreground">
          India's IT sector has become a global powerhouse, characterized by cities like Bangalore and Hyderabad as major hubs for technology innovation and development. Renowned for software services, IT outsourcing, and a robust startup ecosystem, India's IT industry plays a pivotal role in driving economic growth and digital transformation worldwide. With expertise in software development, cybersecurity, and emerging technologies like AI and blockchain, India continues to shape the future of the digital economy on a global scale.
          </p>
        </div>
      </div>
      <Link href="/about" className="text-gray-700 hover:text-blue-500 text-center font-bold">For more info about them click me</Link>
    </section>
  )
}