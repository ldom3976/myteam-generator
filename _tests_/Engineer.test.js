const Engineer = require('../lib/Engineer.js');


test('creates engineer object', () => {
    const engineer = new Engineer('April', '1234', 'april@email.com', 'aprilgithub');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
})