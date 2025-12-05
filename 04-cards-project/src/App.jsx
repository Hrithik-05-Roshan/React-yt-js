import Card from "./components/card";

const App = () => {

  const jobOpenings = [
    {
      brandLogo: "https://imgs.search.brave.com/ZyNDsok-KqN5jBJ5XqiFz-Ja9ltWWIzEKh_m1aWyc-M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEx/L05ldy1Hb29nbGUt/TG9nby00OTd4NTAw/LmpwZw",
      companyName: "Google",
      datePosted: "3 days ago",
      jobPost: "Software Engineer",
      tag1: "Full-Time",
      tag2: "Junior Level",
      pay: "$58/hr",
      location: "Bangalore - Hyderabad"
    },
    {
      brandLogo: "https://imgs.search.brave.com/_9aWC2J-6kcjjEraVybRJWTRAItYfKTn48VppUw-NMw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC82MC8wNS9t/ZXRhLXN5bWJvbC12/ZWN0b3ItNDE4NzYw/MDUuanBn",
      companyName: "Meta",
      datePosted: "2 weeks ago",
      jobPost: "Frontend Developer",
      tag1: "Full-Time",
      tag2: "Senior Level",
      pay: "$72/hr",
      location: "Seattle - Remote"
    },
    {
      brandLogo: "https://imgs.search.brave.com/GxVOq9xuqtiB4Tpa8JJxeWKumoDP0A9x9UXm7yU0e4A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdDMu/ZGVwb3NpdHBob3Rv/cy5jb20vMTAwMTg2/MC8xNjM3NS9pLzQ1/MC9kZXBvc2l0cGhv/dG9zXzE2Mzc1NzYz/Mi1zdG9jay1waG90/by1hbWF6b24tbG9n/by1vbi1hLXdoaXRl/LmpwZw",
      companyName: "Amazon",
      datePosted: "5 hours ago",
      jobPost: "Cloud Solutions Architect",
      tag1: "Part-Time",
      tag2: "Senior Level",
      pay: "$85/hr",
      location: "Mumbai - Delhi"
    },
    {
      brandLogo: "https://imgs.search.brave.com/0bbzyBsMM03oOdswdoM3gKufevOE1CUbkjW3atyp8r4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2E3Lzhj/LzQwL2E3OGM0MDZl/NGFkOTVmNjhiZDhi/MDE0NTgyZWYzZWNl/LmpwZw",
      companyName: "Apple",
      datePosted: "10 days ago",
      jobPost: "iOS Developer",
      tag1: "Full-Time",
      tag2: "Mid Level",
      pay: "$65/hr",
      location: "Cupertino - Remote"
    },
    {
      brandLogo: "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940",
      companyName: "Netflix",
      datePosted: "4 weeks ago",
      jobPost: "Backend Engineer",
      tag1: "Full-Time",
      tag2: "Senior Level",
      pay: "$88/hr",
      location: "Los Angeles - Remote"
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/previews/027/127/473/non_2x/microsoft-logo-microsoft-icon-transparent-free-png.png",
      companyName: "Microsoft",
      datePosted: "1 week ago",
      jobPost: "AI/ML Engineer",
      tag1: "Full-Time",
      tag2: "Junior Level",
      pay: "$62/hr",
      location: "Hyderabad - Bangalore"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRZJkzWaOKawF1LnbqqRHdzfZ9U2wk93ZLgA&s",
      companyName: "Tesla",
      datePosted: "2 days ago",
      jobPost: "Data Analyst",
      tag1: "Part-Time",
      tag2: "Mid Level",
      pay: "$48/hr",
      location: "Texas - Remote"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk6jm8ppO_0i6_E4vkdcWv8Lw1W56RyS8mag&s",
      companyName: "OpenAI",
      datePosted: "5 weeks ago",
      jobPost: "Prompt Engineer",
      tag1: "Full-Time",
      tag2: "Senior Level",
      pay: "$120/hr",
      location: "San Francisco - Remote"
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/previews/021/514/722/non_2x/ibm-brand-symbol-software-computer-logo-design-illustration-free-vector.jpg",
      companyName: "IBM",
      datePosted: "6 days ago",
      jobPost: "DevOps Engineer",
      tag1: "Full-Time",
      tag2: "Mid Level",
      pay: "$56/hr",
      location: "Stockholm - Remote"
    },
    {
      brandLogo: "https://cdn-icons-png.flaticon.com/512/5436/5436922.png",
      companyName: "Adobe",
      datePosted: "3 weeks ago",
      jobPost: "UI/UX Designer",
      tag1: "Part-Time",
      tag2: "Junior Level",
      pay: "$40/hr",
      location: "Noida - Gurgaon"
    }
  ];

  return (
    <div className='parent'>
      {jobOpenings.map((hrithik, index) => (
        <Card
          key={index}
          company={hrithik.companyName}
          timeline={hrithik.datePosted}
          logo={hrithik.brandLogo}
          jobpost={hrithik.jobPost}
          id={hrithik.tag1}
          exp={hrithik.tag2}
          salary={hrithik.pay}
          place={hrithik.location}
        />
      ))}
    </div>
  )
}

export default App
