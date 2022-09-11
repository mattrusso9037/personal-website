exports.handler = async (event) => {
    const bcrypt = require('bcryptjs');
    const password = JSON.parse(event.body).password;
    
    const response = {
        statusCode: 200,
        body: bcrypt.compareSync(password, process.env.SECRET),
    };
    
    return JSON.stringify(response);
};
