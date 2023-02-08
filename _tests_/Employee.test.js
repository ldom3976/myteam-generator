const Employee = require('../lib/Employee.js');

test('creates employee object', () => {
    const employee = new Employee('Jake', '1', 'jake@email.com');

    expect(employee.name).toBe('Jake');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('jake@email.com');
})