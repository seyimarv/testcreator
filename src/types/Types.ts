export interface userType {
    token: string,
    userId: string,
    userName: string,
    tests? : []
}

export interface postUserType {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    tests? : [],
}

export interface loginUserType {
   email: string,
   password: string
}

