const Header = () => (
  <div className="mb-10 text-center px-4 py-8">
    <p className="text-gray-400 text-sm font-semibold uppercase">Business Models to Connect Over</p>
    <h1 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">How We Work Together</h1>
    <p className="text-gray-400 text-sm sm:text-base">Whether you need a one-time solution or ongoing support, we've got you covered. Choose the business model that works for you.</p>
  </div>
);

const ImageSection = () => (
  <div className="mb-10 flex justify-center px-4">
    <img src="team-working.jpg" alt="Team working together" className="rounded-lg w-full max-w-xs sm:max-w-md md:max-w-xl shadow-lg" />
  </div>
);

const Card = ({ title, description, icon }) => (
  <div className="w-[50vw] bg-gray-800 rounded-lg p-6 shadow-lg">
    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mb-4">
      <span className="text-white font-bold text-lg">{icon}</span>
    </div>
    <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400 text-sm sm:text-base">{description}</p>
  </div>
);

const CardSection = () => (
  <div className="w-[85vw] flex flex-col items-center gap-10">
    <Card 
      title="Contract-Based Work" 
      description="Get the expertise you need with the long-term commitment." 
      icon="C"
    />
    <Card 
      title="Project-Based Work" 
      description="From building a website to launching a new marketing campaign, get it done." 
      icon="P" 
    />
  </div>
);

const Work = () => (
  <div className=" text-white min-h-screen py-8">
    <div className="container mx-auto">
      <Header />
      <ImageSection />
      <CardSection />
    </div>
  </div>
);

export default Work;
