var setBanner = function (message) {
    d3.select("#banner")
        .text(message)
}

var drawTable = function (employees) {
    var rows = d3.select("#employeeTable tbody")
        .selectAll("tr")
        .data(employees)
        .enter()
        .append("tr")


    rows.append("td")
        .text(function (employee) {
            return employee.firstName
        })

    rows.append("td")
        .text(function (employee) {
            return employee.lastName
        })

    rows.append("td")
        .append("img")
        .attr("src", function (employee) {
            return employee.photo
        })
    rows.append("td")
        .text((function (employee) {
            return employee.title
        }))
    rows.append("td")
        .text((function (employee) {
            return employee.unit
        }))
    rows.append("td")
        .text((function (employee) {
            return employee.bio
        }))
    rows.append("td")
        .text((function (employee) {
            return employee.email
        }))
    rows.append("td")
        .text((function (employee) {
            return employee.phone
        }))
}
var employeePromise = d3.json("../EmployeeJSONdata/employee.json")

var succFCN = function (employees) {
    console.log("employees", employees)
    setBanner("Here are your employees")
    drawTable(employees)
}

var failFCN = function (err) {
    console.error("did not find the file")
    setBanner("No employees found")
}


employeePromise.then(succFCN, failFCN);
