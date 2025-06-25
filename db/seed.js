import db from "#db/client";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  const employees = [
    {name: 'Nathan Harris', birthday: '1994-02-15', salary: 105000},
    {name: 'Courtney Wagner', birthday: '1995-11-22',
      salary: 85000},
    {name: 'Chris Rennert', birthday: '1988-11-23', salary: 140000}
  ];

  for (const employee of employees) {
    const sql = `
    insert into employees (name,birthday,salary)
    values ($1,$2,$3);
    `;
    const values = [employee.name, employee.birthday, employee.salary];
    await db.query(sql, values)
  }
}
