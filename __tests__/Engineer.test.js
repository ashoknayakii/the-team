const Engineer = require('../lib/Engineer');

test("can get a role via method",() => {
    const role = "Engineer"
    const e = new Engineer ("Steven Smith", 1, "me@gmail.com", "https://github.com/stevensmith");
    expect(e.getRole()).toBe(role)
})

test("can get a github via constructor",() => {
    const github = "https://github.com/stevensmith"
    const e = new Engineer("Steven Smith", 1, "me@gmail.com", github);
    expect(e.github).toBe(github)
})

test("can get an github via method",() => {
    const github = "https://github.com/stevensmith"
    const e = new Engineer("Steven Smith", 1, "me@gmail.com", github);
    expect(e.getGithub()).toBe(github)
})