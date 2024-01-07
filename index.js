

const cors = require('cors');
const express = require('express');
const { links } = require('express/lib/response');
const app = express();
app.use(cors())


const employeeData = [
    {
        "name": "Lori Martin",
        "email": "thompsonbrent@example.net",
        "designation": "Estate manager/land agent",
        "reporting_manager": null
    },
    {
        "name": "Alice Smith",
        "email": "alice.smith@example.com",
        "designation": "CTO",
        "reporting_manager": "thompsonbrent@example.net"
    },
    {
        "name": "Bob Johnson",
        "email": "bob.johnson@example.com",
        "designation": "CFO",
        "reporting_manager": "thompsonbrent@example.net"
    },
    {
        "name": "Eva Davis",
        "email": "eva.davis@example.com",
        "designation": "Senior Developer",
        "reporting_manager": "alice.smith@example.com"
    },
    {
        "name": "Charlie Brown",
        "email": "charlie.brown@example.com",
        "designation": "QA Engineer",
        "reporting_manager": "alice.smith@example.com"
    },
    {
        "name": "Grace Miller",
        "email": "grace.miller@example.com",
        "designation": "Accountant",
        "reporting_manager": "bob.johnson@example.com"
    },
    {
        "name": "Daniel White",
        "email": "daniel.white@example.com",
        "designation": "Financial Analyst",
        "reporting_manager": "bob.johnson@example.com"
    },
    {
        "name": "Olivia Garcia",
        "email": "olivia.garcia@example.com",
        "designation": "Junior Developer",
        "reporting_manager": "eva.davis@example.com"
    },
    {
        "name": "Liam Martinez",
        "email": "liam.martinez@example.com",
        "designation": "UX Designer",
        "reporting_manager": "eva.davis@example.com"
    },
    {
        "name": "Ava Rodriguez",
        "email": "ava.rodriguez@example.com",
        "designation": "QA Tester",
        "reporting_manager": "charlie.brown@example.com"
    },
    {
        "name": "Mia Harris",
        "email": "mia.harris@example.com",
        "designation": "Junior QA Tester",
        "reporting_manager": "charlie.brown@example.com"
    },
    {
        "name": "Noah Taylor",
        "email": "noah.taylor@example.com",
        "designation": "Assistant Accountant",
        "reporting_manager": "grace.miller@example.com"
    },
    {
        "name": "Sophia Clark",
        "email": "sophia.clark@example.com",
        "designation": "Senior Accountant",
        "reporting_manager": "grace.miller@example.com"
    },
    {
        "name": "Jackson Wright",
        "email": "jackson.wright@example.com",
        "designation": "Junior Analyst",
        "reporting_manager": "daniel.white@example.com"
    },
    {
        "name": "Emma Lee",
        "email": "emma.lee@example.com",
        "designation": "Financial Researcher",
        "reporting_manager": "daniel.white@example.com"
    },
    {
        "name": "Carter Adams",
        "email": "carter.adams@example.com",
        "designation": "Intern Developer",
        "reporting_manager": "olivia.garcia@example.com"
    },
    {
        "name": "Aria Moore",
        "email": "aria.moore@example.com",
        "designation": "Intern Designer",
        "reporting_manager": "olivia.garcia@example.com"
    },
    {
        "name": "Ethan Nelson",
        "email": "ethan.nelson@example.com",
        "designation": "Junior UX Designer",
        "reporting_manager": "liam.martinez@example.com"
    },
    {
        "name": "Luna King",
        "email": "luna.king@example.com",
        "designation": "UX Researcher",
        "reporting_manager": "liam.martinez@example.com"
    },
    {
        "name": "Logan Turner",
        "email": "logan.turner@example.com",
        "designation": "Senior QA Tester",
        "reporting_manager": "ava.rodriguez@example.com"
    },
    {
        "name": "Harper Ward",
        "email": "harper.ward@example.com",
        "designation": "Lead QA Tester",
        "reporting_manager": "ava.rodriguez@example.com"
    },
    {
        "name": "Mason Foster",
        "email": "mason.foster@example.com",
        "designation": "QA Analyst",
        "reporting_manager": "mia.harris@example.com"
    },
    {
        "name": "Layla Turner",
        "email": "layla.turner@example.com",
        "designation": "Junior QA Analyst",
        "reporting_manager": "mia.harris@example.com"
    },
    {
        "name": "Sophie Baker",
        "email": "sophie.baker@example.com",
        "designation": "HR Manager",
        "reporting_manager": "thompsonbrent@example.net"
    },
    {
        "name": "Oliver Martin",
        "email": "oliver.martin@example.com",
        "designation": "Marketing Specialist",
        "reporting_manager": "sophie.baker@example.com"
    },
    {
        "name": "Emma Carter",
        "email": "emma.carter@example.com",
        "designation": "Event Coordinator",
        "reporting_manager": "sophie.baker@example.com"
    },
    {
        "name": "Lucas Turner",
        "email": "lucas.turner@example.com",
        "designation": "Sales Manager",
        "reporting_manager": "sophie.baker@example.com"
    },
    {
        "name": "Avery Adams",
        "email": "avery.adams@example.com",
        "designation": "Sales Representative",
        "reporting_manager": "lucas.turner@example.com"
    },
    {
        "name": "Riley Mitchell",
        "email": "riley.mitchell@example.com",
        "designation": "Customer Support Manager",
        "reporting_manager": "thompsonbrent@example.net"
    },
    {
        "name": "Leo Turner",
        "email": "leo.turner@example.com",
        "designation": "Customer Support Specialist",
        "reporting_manager": "riley.mitchell@example.com"
    },
    {
        "name": "Hazel Hall",
        "email": "hazel.hall@example.com",
        "designation": "IT Manager",
        "reporting_manager": "thompsonbrent@example.net"
    },
    {
        "name": "Caleb Wood",
        "email": "caleb.wood@example.com",
        "designation": "System Administrator",
        "reporting_manager": "hazel.hall@example.com"
    },
    {
        "name": "Isabella Adams",
        "email": "isabella.adams@example.com",
        "designation": "Graphic Designer",
        "reporting_manager": "sophie.baker@example.com"
    },
    {
        "name": "Benjamin White",
        "email": "benjamin.white@example.com",
        "designation": "Software Engineer",
        "reporting_manager": "alice.smith@example.com"
    },
    {
        "name": "Samantha Green",
        "email": "samantha.green@example.com",
        "designation": "Marketing Manager",
        "reporting_manager": "thompsonbrent@example.net"
    },
    {
        "name": "Max Turner",
        "email": "max.turner@example.com",
        "designation": "Marketing Coordinator",
        "reporting_manager": "samantha.green@example.com"
    },
    {
        "name": "Nathan Brown",
        "email": "nathan.brown@example.com",
        "designation": "Data Analyst",
        "reporting_manager": "daniel.white@example.com"
    },
    {
        "name": "Amelia Carter",
        "email": "amelia.carter@example.com",
        "designation": "UX/UI Designer",
        "reporting_manager": "liam.martinez@example.com"
    },
    {
        "name": "Cameron Davis",
        "email": "cameron.davis@example.com",
        "designation": "Business Analyst",
        "reporting_manager": "daniel.white@example.com"
    },
    {
        "name": "Lucy Taylor",
        "email": "lucy.taylor@example.com",
        "designation": "Technical Writer",
        "reporting_manager": "alice.smith@example.com"
    },
    {
        "name": "Zachary Martin",
        "email": "zachary.martin@example.com",
        "designation": "Front-end Developer",
        "reporting_manager": "eva.davis@example.com"
    },
    {
        "name": "Maya Rodriguez",
        "email": "maya.rodriguez@example.com",
        "designation": "Content Writer",
        "reporting_manager": "charlie.brown@example.com"
    },
    {
        "name": "James Turner",
        "email": "james.turner@example.com",
        "designation": "Network Administrator",
        "reporting_manager": "hazel.hall@example.com"
    },
    {
        "name": "Evelyn Ward",
        "email": "evelyn.ward@example.com",
        "designation": "HR Specialist",
        "reporting_manager": "sophie.baker@example.com"
    },
    {
        "name": "Mason Wright",
        "email": "mason.wright@example.com",
        "designation": "Software Tester",
        "reporting_manager": "eva.davis@example.com"
    }
]

const n = employeeData.length;

const imageApiUrl = `https://picsum.photos/v2/list?page=1&limit=${n}`;

console.log(imageApiUrl);
app.get('/', async (req, res) => {
    
    const baseUrl = window.location.origin;
    const newUrl = baseUrl + "/getEmployeeData";
    const openUrl = () => {
        window.open(newUrl, '_blank');
    }
    res.send(`<a href="#" onClick="openUrl()"> Call employee data<a/>`);
     res.send(`<p> Add<p/>`);
})

app.get('/getEmployeeData', async (req, res) => {
    const response = await fetch(imageApiUrl);

    const imageUrls = (await response.json()).map(x => x.download_url);

    employeeData.forEach((val, index) => {
        val.imageUrl = imageUrls[index];
    });

    res.send(employeeData);
})

app.listen(9000, () => console.log('Server started...'));
