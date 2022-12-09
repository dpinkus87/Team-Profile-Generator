const Employee = require("./lib/employee")

function generateHTML(data) {
    console.log(data);
    return `

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <title>Document</title>
</head>
<body>
<header>Our Team</header>
<main class="container">
<div class"row justify-content-center">
${data.map(employee => {
    if(employee.getRole() === "manager")
    generateManagerCard(employee);
} else if {
    (employee.getRole === "engineer")
    generateEngineerCard(employee);
} else if {
    (employee.getRole === "intern")
    generateInternCard(employee);
})
};
    </div>
    </main>
</body>
</html>

`
}

module.exports = generateHTML