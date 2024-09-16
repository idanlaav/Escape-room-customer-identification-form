import dal from "../2-utils/dal";
import cyber from "../2-utils/cyber";
import { UnauthorizedError, ValidationError } from "../4-models/errors-model";
import CredentialsModel from "../4-models/credentials-model";

async function login(credential: CredentialsModel): Promise<string> {
    const errors = credential.logInValidation();
    if (errors) {
        throw new ValidationError(errors);
    }
    credential.email = credential.email.toLowerCase();    
    credential.password = cyber.hash(credential.password)
    const sql = `SELECT * FROM users 
                 WHERE email LIKE ?
                 AND password LIKE ?;`;
    const values = [credential.email, credential.password];
    const result = await dal.execute(sql,values);
    if(result[0] === undefined) {
        throw new UnauthorizedError("Incorrect email or password");
    }
    const token = cyber.getNewToken(result);
    delete credential.password
    return token;
}

export default {
    login
}