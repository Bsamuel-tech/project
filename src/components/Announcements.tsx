const announcements = [
  {
    title: "Genetics Workshop",
    date: "Jan 15, 2025",
    author: "John Doe",
    profilePic: "/images/john-doe.jpg",
    link: "https://announcements.example.com/workshop",
  },
  {
    title: "Community Fundraiser",
    date: "Feb 10, 2025",
    author: "Jane Smith",
    profilePic: "/images/jane-smith.jpg",
    link: "https://announcements.example.com/fundraiser",
  },
];

export default function Announcements() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Community Announcements</h2>
        <ul className="space-y-4">
          {announcements.map((announcement, idx) => (
            <li key={idx} className="flex items-center bg-white p-4 rounded-md shadow-md">
              {/* Author Profile Picture */}
              <img
                src={announcement.profilePic}
                alt={announcement.author}
                className="w-10 h-10 rounded-full mr-4"
              />

              {/* Announcement Details */}
              <div>
                <h3 className="font-bold">{announcement.title}</h3>
                <p className="text-sm text-gray-600">
                  {announcement.author} | {announcement.date}
                </p>
              </div>

              {/* Link to Announcement */}
              <a
                href={announcement.link}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto text-indigo-500 hover:underline"
              >
                Go to Announcements
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
