/** @returns the employee created according to the provided details */
export async function createEmployee({ name, birthday, salary }) {
  const sql = `
  insert into employees (name, birthday, salary)
  values ($1, $2, $3)
  returning *;
  `;
  const values = [name, birthday, salary];
  const result = await db.query(sql, values);
  return result.rows[0];
}

// === Part 2 ===

/** @returns all employees */
export async function getEmployees() {
  const sql = 'SELECT * FROM employees;';
  const result = await db.query(sql);
  return result.rows;
}

/**
 * @returns the employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function getEmployee(id) {
  const sql = 'SELECT * FROM employees WHERE id = $1;';
  const values = [id];
  const result = await db.query(sql, values);
  return result.rows[0];
}

/**
 * @returns the updated employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function updateEmployee({ id, name, birthday, salary }) {
  const sql = `
    UPDATE employees
    SET name = $1, birthday = $2, salary = $3
    WHERE id = $4
    RETURNING *;
  `;
  const values = [name, birthday, salary, id];
  const result = await db.query(sql, values);
  return result.rows[0];
}

/**
 * @returns the deleted employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function deleteEmployee(id) {
  const sql = 'DELETE FROM employees WHERE id = $1 RETURNING *;';
  const values = [id];
  const result = await db.query(sql, values);
  return result.rows[0]; // Returns deleted row or undefined
}
