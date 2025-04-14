export default function createEmployeesObject(departmentName, employees) {
  const key = `$${departmentName}`;
  const value = employees.map(employee => `$${employee}`);
  return {
    [key]: value,
  };
}
