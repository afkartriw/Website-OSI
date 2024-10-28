import { Chats, Desktop, LightbulbFilament, UserCircle, Alarm, Smiley } from "@phosphor-icons/react/dist/ssr";

export default function Facts() {
  const facts = [
    { title: "Clients & Partners", value: "100+", icon: <Chats size={56} /> },
    {
      title: "Problems Solved",
      value: "50+",
      icon: <LightbulbFilament size={56} />,
    },
    { title: "Years Experience", value: "10+", icon: <Alarm size={56} /> },
    { title: "Line of code has been written", value: "10B+", icon: <Desktop size={56} /> },
    { title: "OSI Talents", value: "100+", icon: <UserCircle size={56} /> },
    { title: "Clients Smile", value: "INFINITE", icon: <Smiley size={56} /> },
  ];

  return (
    <section className="py-24 px-32 bg-custom3">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Facts</h2>
      <p className="text-gray-600 mb-12">
        We are enthusiastic about using digital solutions to solve our clients'{" "}
        <br />
        problems by developing outstanding projects. Take a look at this
        satisfied customer.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-8xl mx-auto">
        {facts.map((fact, index) => (
          <div
            key={index}
            className="flex flex-col p-6"
          >
            <p className="text-color-secondary text-base">{fact.title}</p>
            <div className="flex items-center mb-4">
              <span className="text-6xl mr-4">{fact.icon}</span>
              <h3 className="text-4xl font-semibold text-color-primary">
                {fact.value}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
