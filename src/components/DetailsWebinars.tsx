
const detailsofwebinars = [
    {
      "title": "The Future of Music Production",
      "date": "2025-02-20",
      "time": "4:00 PM",
      "host": "John Doe",
      "description": "Exploring emerging trends in music production technology.",
      "duration": "60 mins",
      "registrationLink": "https://example.com/register1"
    },
    {
      "title": "Mastering DAWs for Beginners",
      "date": "2025-02-23",
      "time": "11:00 AM",
      "host": "Jane Smith",
      "description": "Learn how to use Digital Audio Workstations effectively.",
      "duration": "90 mins",
      "registrationLink": "https://example.com/register2"
    },
    {
      "title": "How to Monetize Your Music",
      "date": "2025-02-28",
      "time": "2:30 PM",
      "host": "Mark Thompson",
      "description": "Tips for musicians to generate income through music.",
      "duration": "75 mins",
      "registrationLink": "https://example.com/register3"
    },
    {
      "title": "Live Performance Setup Guide",
      "date": "2025-03-03",
      "time": "6:00 PM",
      "host": "Emily Carter",
      "description": "Step-by-step guide to setting up live music performances.",
      "duration": "60 mins",
      "registrationLink": "https://example.com/register4"
    },
    {
      "title": "AI in Music Production",
      "date": "2025-03-10",
      "time": "3:00 PM",
      "host": "Alex Johnson",
      "description": "Discover how AI is transforming the music industry.",
      "duration": "90 mins",
      "registrationLink": "https://example.com/register5"
    },
    {
      "title": "Music Branding & Marketing",
      "date": "2025-03-15",
      "time": "1:00 PM",
      "host": "Sarah Lopez",
      "description": "Build your personal brand and market your music effectively.",
      "duration": "60 mins",
      "registrationLink": "https://example.com/register6"
    },
    {
      "title": "Mixing & Mastering Essentials",
      "date": "2025-03-20",
      "time": "5:30 PM",
      "host": "Daniel Lee",
      "description": "Improve your audio mixing and mastering techniques.",
      "duration": "90 mins",
      "registrationLink": "https://example.com/register7"
    },
    {
      "title": "The Role of NFTs in Music",
      "date": "2025-03-25",
      "time": "4:00 PM",
      "host": "Michelle Brooks",
      "description": "How NFTs are revolutionizing the music industry.",
      "duration": "60 mins",
      "registrationLink": "https://example.com/register8"
    }
  ]
  

export default function DetailsWebinars() {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{detailsofwebinars.map((e) => (
            e.title
        ))}</h2>
        <p>{detailsofwebinars.map((e) => (
            e.description
        ))}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Book seat</button>
        </div>
      </div>
    </div>
  );
}
