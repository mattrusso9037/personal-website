export class API {
    static login = async (password: string): Promise<boolean> => {
        try {
            const res = await fetch('https://ydytuawa5mtoiuetvozpxim6mu0hqqxt.lambda-url.us-east-1.on.aws/', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    password: password.trim(),
                }),
            });
            const { body } = await res.json();
            
            return body;
        } catch (e) {
            console.error(e);
            return false;
        }
    };

}