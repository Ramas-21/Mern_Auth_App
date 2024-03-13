const About = () => {
  return (
    <div className="px-4 py-12 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-slate-800">
        About
      </h1>
      <p className="mb-4 text-slate-700">
        Backend development refers to the server-side logic of web applications, 
        encompassing the functionality that runs on the server and communicates with 
        the client-side front end. It involves the creation, management, and optimization 
        of databases, servers, and application logic that power the dynamic aspects of a website or web application.
      </p>
      <p className="mb-4 text-slate-700">
        At its core, backend development revolves around handling data, processing requests, 
        and generating appropriate responses to client-side actions. This includes implementing 
        authentication and authorization mechanisms to ensure secure access to resources, managing 
        sessions and cookies for user persistence, and integrating with third-party services or APIs 
        for additional functionality.
      </p>
      <p className="mb-4 text-slate-700">
        Backend developers often work with various technologies and frameworks such as Node.js, Python 
        with frameworks like Django or Flask, Ruby on Rails, and Java with frameworks like Spring Boot, 
        depending on the specific requirements of the project. They also focus on scalability, performance, 
        and reliability to ensure that the backend infrastructure can handle varying loads and provide a seamless 
        user experience.
      </p>
    </div>
  );
};

export default About;
