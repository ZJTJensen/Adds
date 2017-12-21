export class User {
    _id: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    password_confirm: string;
    license: string;
    company: string;
    created_at: Date;
    updated_at: Date
};
export class Add {
    _id: string;
    company: string;
    type: string;
}
