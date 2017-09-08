let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

function printGroup(group) {
  for (member in group) {
    console.log('Name: ' + group[member].name + ', Cohort: ' + group[member].cohort);
  }
}

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

 function printGroups(groups) {
  for (grp in groups) {
    console.log(grp);
    for (var i=0; i < groups[grp].length; i++)
      console.log(groups[grp][i]['first_name'] + ' ' +
                  groups[grp][i]['last_name'] + ' - ' +
                  (groups[grp][i]['first_name'].length +
                  groups[grp][i]['last_name'].length));
    }
  }

  printGroup(students);
  printGroups(users);
