import Joi from "joi";

class CredentialsModel {
    public email: string;
    public password: string;

    public constructor(credential: CredentialsModel) {
        this.email = credential.email;
        this.password = credential.password;
    }

    private static credentialValidation = Joi.object ({
        email: Joi.string().required().min(6).max(50),
        password: Joi.string().required().min(6).max(20),
        role: Joi.string().optional()
    })

    public logInValidation(): string {
        const result = CredentialsModel.credentialValidation.validate(this, {abortEarly: false} );
        return result.error?.message;
    }
}

export default CredentialsModel;